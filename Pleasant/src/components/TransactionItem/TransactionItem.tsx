import React from 'react';
import styles from './TransactionItem.module.css';

const TransactionItem = ({nome, foto, quantidade, moeda}) => {
  return (
    <div className={styles.container}>

        <div className={styles.userInfo}>
            <img src={foto} alt="Diagram"/>
            <h3>{nome}</h3>
        </div>
        
        <label>{quantidade} {moeda}</label> 
    </div>
  );
};

export default TransactionItem;