import { useState } from 'react';
import sdk from '@crossmarkio/sdk';
import styles from '../../App.module.css';
import stylesCard from './CardTransaction.module.css';

function CardTransaction({ walletAddress }: { walletAddress: string }) {
  const [destinationAddress, setDestinationAddress] = useState('');
  const [amount, setAmount] = useState('');

  const transfer = async () => {
    if (!destinationAddress || !amount) {
      alert('Por favor, preencha os campos de destino e quantidade!');
      return;
    }

    try {
      const { response } = await sdk.methods.signAndSubmitAndWait({
        TransactionType: 'Payment',
        Account: walletAddress,
        Destination: destinationAddress,
        Amount: amount,
      });

      if (response.data.resp) {
        alert('Transação realizada com sucesso!');
      } else {
        alert('Falha na transação. Verifique os dados e tente novamente.');
      }
    } catch (error) {
      console.error('Erro na transação:', error);
      alert('Ocorreu um erro ao processar a transação.');
    }
  };

  return (
    <div className={styles.containerBox}>
      <h2 className={styles.subtitle}>Realizar Transação</h2>
      <input
        type="text"
        placeholder="Endereço de destino"
        value={destinationAddress}
        onChange={(e) => setDestinationAddress(e.target.value)}
        className={stylesCard.input}
      />
      <input
        type="number"
        placeholder="Quantidade (em tokens)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={stylesCard.input}
      />
      <button onClick={transfer} className={styles.btn}>
        Enviar
      </button>
    </div>
  );
}

export default CardTransaction;
