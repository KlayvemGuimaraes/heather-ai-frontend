import React from 'react';
import { useState } from 'react';
import styles from './RevenueBDiagram.module.css';
import '../Diagrams.css'

// IMAGENS
import arrow_up  from '../../../assets/iconsDiagrams/arrow_up.svg'
import diagrama from '../../../assets/diagrams/revenueB.png'

const RevenueBDiagram = () => {

    const [revenue, setRevenue] = useState('7.852.000');
    const [variation, setVariation] = useState('Up');
    const [timePeriod, setTimePeriod] = useState('1-30 Nov, 2024');
    const [varPercentage, setVarPercentage] = useState('2.1');

  return (
    <div className={styles.container}>

        <div className='topDiagram'>
            <div className='infoLabels'>
                <h3>Revenue</h3>
                <h4>$ {revenue}</h4>

                <div className={styles.variation}>
                    <img src={arrow_up} alt={`Arrow ${variation}`} /> {/* A ideia é variar a seta de acordo com a variação */}

                    <label className={styles.varPercentage}>{varPercentage}%</label>
                    <label> vs last week</label>
                </div>
            </div>

            <button className='reportButton'>
                View Report
            </button>
        </div>
        <label>Treasures from {timePeriod}</label>

        <div className='diagram'>
            <img className={styles.diagramImg} src={diagrama} alt="Diagram"/>

            <div className={styles.labels}>
                <div className={styles.purple}>
                    <div className={styles.pColor}></div>
                    <label>Last 6 days</label>
                </div>
                <div className={styles.gray}>
                    <div className={styles.gColor}></div>
                    <label>Last Week</label>
                </div>
            </div>
        </div>
          
    </div>
  );
};

export default RevenueBDiagram;