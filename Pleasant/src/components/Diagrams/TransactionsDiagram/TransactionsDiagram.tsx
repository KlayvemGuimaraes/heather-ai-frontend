import React from 'react';
import { useState } from 'react';
import styles from './TransactionsDiagram.module.css';
import TransactionItem from '../../TransactionItem/TransactionItem';

// IMAGENS
import juliaPhoto from '../../../assets/userPhotos/juliaPhoto.png' 
import juniorPhoto from '../../../assets/userPhotos/juniorPhoto.png' 
import yamiPhoto from '../../../assets/userPhotos/yamiPhoto.png' 
import jjuniorPhoto from '../../../assets/userPhotos/jjuniorPhoto.png' 

const TransactionsDiagram = () => {

    const [timePeriod, setTimePeriod] = useState('1-30 Nov, 2024');

  return (
    <div className='container'>

        <div className='topDiagram'>
            <div className='infoLabels'>
                <h3>Transactions</h3>
            </div>
        </div>

        <div className='diagram'>
            <label>My last friends transactions</label>
            <div className={styles.transactionsList}>
                <TransactionItem nome='Julia Santos' foto={juliaPhoto} quantidade='0.00045' moeda='BTC' ></TransactionItem>             
                <TransactionItem nome='Junior Motta' foto={juniorPhoto} quantidade='1.09865' moeda='ETH' ></TransactionItem>             
                <TransactionItem nome='Renato Yami' foto={yamiPhoto} quantidade='3.98754' moeda='SOL' ></TransactionItem>             
                <TransactionItem nome='Júnior Ferreira' foto={jjuniorPhoto} quantidade='0.001' moeda='XRP' ></TransactionItem>             
            </div>
        </div>
          
    </div>
  );
};

export default TransactionsDiagram;