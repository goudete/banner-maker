import React from 'react';
import { layers, format } from '../../config.ts';

import './controlPanel.scss'

const ControlPanel = (props) => {
    const { selectedLayers, setSelectedLayers } = props;

    const onImageSelection = (layer, image) => {
        const newSelectedLayers = selectedLayers.map((currLayer) => (
            {
                layerName: currLayer.layerName,
                imageName: currLayer.layerName === layer ? image : currLayer.imageName
            }
        ));

        setSelectedLayers(newSelectedLayers);
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