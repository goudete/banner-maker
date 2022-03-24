
import React, { useEffect, useRef } from "react";
const { format, selectedLayers } = require('../../config.ts');


const Canvas = () => {

    const canvasRef = useRef(null);

    const drawBackground = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.fillStyle = format.backgroundColor;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    };

    const drawElements = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        selectedLayers.forEach((layer) => {
            drawElement(context, layer);
        });
    };

    const drawElement = async (context, layer) => {
        const img = new Image();
        img.src = layer.path;

        context.drawImage(
            img,
            0,
            0,
            format.width,
            format.height
        );
    }

    useEffect(() => {
        drawBackground();
        // drawElements();
    }, [selectedLayers]);

    return <canvas ref={canvasRef} width={format.width} height={format.height} />
}

export default Canvas;