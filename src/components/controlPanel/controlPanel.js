import React from 'react';
import { layers, format, selectedLayers } from '../../config.ts';

import './controlPanel.scss'

const ControlPanel = () => {
    /*
    in charge of:
        - modifying selectedLayers object
    */

    const onImageSelection = (layer, image) => {
        console.log(layer, image)
        console.log('PRE MOD:',selectedLayers)

        let copy = [...selectedLayers];
        const newSelectedLayers = copy.map((currLayer) => {
            if (currLayer.layerName === layer) {
                currLayer.imageName = image
            }
        });
        selectedLayers = newSelectedLayers;
        console.log('POST MOD:', selectedLayers)
    };

    const images = layers.map((layer) => {
        return layer?.images.map((img) => (
            <div key={img.name} className='layerImage'>
                <img
                    alt={img.name}
                    src={require(`../../static/layers/${layer.layerName}/${img.name}.png`)}
                    width={format.width}
                    height={format.height}
                    onClick={() => onImageSelection(layer.layerName, img.name)}
                />
            </div>
        ));
    });

    return <div>
        {images}
    </div>;
}

export default ControlPanel;