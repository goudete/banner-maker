import React from 'react';
import text from './static/text.png';
import Canvas from './components/canvas/canvas';

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
                    <img src={text} alt="WTF" />
                </div>
            </div>
            <div className='container__footer'></div>
        </div>
    );
}

export default App;
