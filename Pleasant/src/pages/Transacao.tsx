import { useState } from 'react';
import Transaction from '../components/Transaction';
import Cookies from 'js-cookie';
import styles from '../App.module.css';

function Transacao() {
  const walletAddress = Cookies.get('walletAddress');
  
  if (!walletAddress) {
    return <p>Você não está logado. Volte para a página inicial.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo!</h1>
      <p className={styles.text}>Você está logado com o endereço da carteira: {walletAddress}</p>
      <Transaction walletAddress={walletAddress} />
    </div>
  );
}

export default Transacao;
