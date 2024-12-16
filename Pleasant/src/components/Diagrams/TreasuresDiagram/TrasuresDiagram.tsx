import React from 'react';
import { useState } from 'react';
import styles from './TreasuresDiagram.module.css';

// IMAGENS

const TreasuresDiagram = () => {

    const [timePeriod, setTimePeriod] = useState('1-30 Nov, 2024');

  return (
    <div className='container'>

        <div className='topDiagram'>
            <div className='infoLabels'>
                <h3>My Treasures</h3>
            </div>

            <button className='reportButton'>
                View Report
            </button>
        </div>

        <div className='diagram'>
            <label>Treasures from {timePeriod}</label>
            <img src="../src/assets/diagrams/treasures.png" alt="Diagram"/>
        </div>
          
    </div>
  );
};

export default TreasuresDiagram;