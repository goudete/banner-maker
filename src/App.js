import React, { useEffect, useState } from 'react';
import Canvas from './components/canvas/canvas';
import ControlPanel from './components/controlPanel/controlPanel';
import { layers } from './config.ts';

import './App.scss';


const App = () => {
    const [selectedLayers, setSelectedLayers] = useState([]);

    const initSelectedLayers = () => {
        const selectedLayers = layers.map((layer) => (
            {
                layerName: layer.layerName,
                imageName: ''
            }
        ));
        setSelectedLayers(selectedLayers);
    }


    useEffect(() => {
        initSelectedLayers();
    }, []);

    return (
        <div className='container'>
            <div className='container__header'></div>
            <div className='container__body'>
                <div className='container__body-canvas'>
                    <Canvas
                        selectedLayers={selectedLayers}
                    />
                </div>
                <div className='container__body-controls'>
                    <ControlPanel
                        selectedLayers={selectedLayers}
                        setSelectedLayers={setSelectedLayers}
                    />
                </div>
            </div>
            <div className='container__footer'></div>
        </div>
    );
}

export default App;
