import React from 'react';

const { layers } = require('../../config.ts')

const ControlPanel = () => {
    /*
    in charge of:
        - displaying loaded images
        - modifying selectedLayers object

    */


    // this function modifies the selectedLayers object
    // const selectImage = () => {};


    return <div>
        {/* need to render images by layer */}
        {layers.map((img) => <image src={img.path} />)}
    </div>
}

export default ControlPanel;