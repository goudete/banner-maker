import React from 'react';
import Canvas from './components/canvas/canvas';
import ControlPanel from './components/controlPanel/controlPanel';

import './App.scss';


const App = () => {

    return (
        <div className='container'>
            <div className='container__header'></div>
            <div className='container__body'>
                <div className='container__body-canvas'>
                    <Canvas />
                </div>
                <div className='container__body-controls'>
                    <ControlPanel />
                </div>
            </div>
            <div className='container__footer'></div>
        </div>
    );
}

export default App;
