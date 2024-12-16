import React from 'react';
import { useState } from 'react';
import styles from './TreasuresDiagram.module.css';

// IMAGENS

const TreasuresDiagram = () => {

    const [timePeriod, setTimePeriod] = useState('1-30 Nov, 2024');

  return (
    <div className={styles.container}>

        <div className='topDiagram'>
            <div className='infoLabels'>
                <h3>My Treasures</h3>
            </div>

            <button className='reportButton'>
                View Report
            </button>
        </div>
        <label>Treasures from {timePeriod}</label>

        <div className='diagram'>
            <img className={styles.diagramImg} src="../src/assets/diagrams/treasures.png" alt="Diagram"/>
        
            <div className={styles.labels}>
                <div className={styles.dpurple}>
                    <div className={styles.dpColor}></div>
                    <label>Bride day 40%</label>
                </div>
                <div className={styles.purple}>
                    <div className={styles.pColor}></div>
                    <label>My car 32%</label>
                </div>
                <div className={styles.lpurple}>
                    <div className={styles.lpColor}></div>
                    <label>My home 28%</label>
                </div>
            </div>
        </div>
          
    </div>
  );
};

export default TreasuresDiagram;