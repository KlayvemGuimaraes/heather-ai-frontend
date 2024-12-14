import { useState } from 'react';
import Cookies from 'js-cookie';
import ConnectWallet from '../components/ConnectWallet';
import Login from '../components/Login';
import Signup from '../components/Signup';
import styles from '../App.module.css';

function Registro() {
  const [walletAddress, setWalletAddress] = useState(Cookies.get('walletAddress') || '');
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className={styles.container}>
      <img src="../../src/assets/VectorPleasantPurple.svg" alt="Logo Pleasant" />
      <h1 className={styles.title}>{isRegistering ? 'Cadastro' : 'Bem-vindo de volta!'}</h1>

      {!walletAddress && <ConnectWallet setWalletAddress={setWalletAddress} />}

      {walletAddress && (
        <div>
          <p className={styles.text}>Carteira conectada: {walletAddress}</p>

          {isRegistering ? (
            <Signup walletAddress={walletAddress} onSuccess={() => setIsRegistering(false)} />
          ) : (
            <Login walletAddress={walletAddress} onRegister={() => setIsRegistering(true)} />
          )}
        </div>
      )}
    </div>
  );
}

export default Registro;
