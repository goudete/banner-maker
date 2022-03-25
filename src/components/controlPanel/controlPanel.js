import React from 'react';
import { layers, format } from '../../config.ts';

const ControlPanel = () => {
    /*
    in charge of:
        - displaying loaded images
        - modifying selectedLayers object

    */


    // this function modifies the selectedLayers object
    // const selectImage = () => {};

    const images = layers.map((layer) => {
        return layer?.images.map((img) => (
            <img
                key={img.name}
                alt={`${img.name}`}
                src={require(`../../static/layers/${layer.layerName}/${img.name}.png`)}
                width={format.width}
                height={format.height}
            />
        ));
    });

    return <div>
        {images}
    </div>;
}

export default ControlPanel;