import React from 'react';
import { useState } from 'react';
import styles from './RevenueDiagram.module.css';
import '../Diagrams.css'

// IMAGENS
import arrow_up  from '../../../assets/iconsDiagrams/arrow_up.svg'
import diagrama from '../../../assets/diagrams/revenue.png'

const RevenueDiagram = () => {

    const [revenue, setRevenue] = useState('7.852.000');
    const [variation, setVariation] = useState('Up');
    const [timePeriod, setTimePeriod] = useState('1-30 Nov, 2024');
    const [varPercentage, setVarPercentage] = useState('2.1');

  return (
    <div className='container'>

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

        <div className='diagram'>
            <label>Treasures from {timePeriod}</label>
            <img src={diagrama} alt="Diagram"/>
            {/* <div className='fig'></div> */}
        </div>
          
    </div>
  );
};

export default RevenueDiagram;