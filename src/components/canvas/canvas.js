
import { useEffect } from "react";
const { format } = require('../../config');


const Canvas = () => {

    const drawBackground = () => {
        const canvas = document.querySelector('#canvas');
        const context = canvas.getContext('2d');

        context.fillStyle = format.BACKGROUND_COLOR;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    };

    // const drawElement = (_renderObject, _index, _layersLen) => {
    //     context.drawImage(
    //         _renderObject.loadedImage,
    //         0,
    //         0,
    //         format.width,
    //         format.height
    //     );
    // };

    // const saveImage = () => {
    //     fs.writeFileSync(
    //         `${buildDir}/images/banner.png`,
    //         canvas.toBuffer("image/png")
    //     );
    // };
    useEffect(() => {
        drawBackground();
    }, []);

    return <div>
        <canvas width={format.WIDTH} height={format.HEIGHT} id="canvas"></canvas>
    </div>
}

export default Canvas;