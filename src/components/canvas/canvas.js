
import React, { useEffect, useRef } from "react";
const { format, layers, loadedImages } = require('../../config');


const Canvas = () => {

    const canvasRef = useRef(null);

    const drawBackground = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.fillStyle = format.BACKGROUND_COLOR;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    };

    const drawElements = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        layers.forEach((layer) => {
            drawElement(context, layer);
        });
    };

    const drawElement = async (context, layer) => {
        context.drawImage(
            layer.loadedImage,
            0,
            0,
            format.WIDTH,
            format.HEIGHT
        );
    }

    useEffect(() => {
        drawBackground();
        // drawElements();
        console.log('loadedImages:', loadedImages)
    }, [loadedImages]);

    return <canvas ref={canvasRef} width={format.WIDTH} height={format.HEIGHT} />
}

export default Canvas;




// const saveImage = () => {
//     fs.writeFileSync(
//         `${buildDir}/images/banner.png`,
//         canvas.toBuffer("image/png")
//     );
// };