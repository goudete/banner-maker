import React, { useEffect, useRef } from "react";
import { format } from '../../config.ts';

const Canvas = (props) => {
    const { selectedLayers } = props;
    const canvasRef = useRef(null);

    const drawBackground = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.fillStyle = format.backgroundColor;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    };

    const drawElements = async () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        selectedLayers.forEach((layer) => {
            drawElement(context, layer);
        });
    };

    const drawElement = (context, layer) => {
        if (layer.imageName) {
            const img = new Image();
            img.src = require(`../../static/layers/${layer.layerName}/${layer.imageName}.png`);
    
            img.onload = function () {
                context.drawImage(
                    img,
                    0,
                    0,
                    format.width,
                    format.height
                );
            }
        }
    }

    useEffect(() => {
        drawBackground();
        drawElements();
    }, [selectedLayers]);

    return <canvas ref={canvasRef} width={format.width} height={format.height} />;
}

export default Canvas;