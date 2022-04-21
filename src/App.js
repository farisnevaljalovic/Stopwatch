import React from 'react';
import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import StopWatch from './components/StopWatch/StopWatch';


function App() {
    return (
        <div>
            <Navbar />
            <div className='main-section'>
                <StopWatch />
            </div>
        </div>
    )
}

export default App
