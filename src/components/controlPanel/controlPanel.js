import React from 'react';

const { layers } = require('../../config')

const ControlPanel = () => {
    /*

    in charge of:
        - displaying loaded images
        - 

    */

   const selectImage = () => {};


    return <div>
        {layers.length > 0 ? layers.map((img) => <image src={img.path} />) : ''}
    </div>
}

export default ControlPanel;