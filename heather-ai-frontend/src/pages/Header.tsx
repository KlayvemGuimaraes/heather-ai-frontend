import { useState } from 'react';
import Cookies from 'js-cookie';
import ConnectWallet from '../components/ConnectWallet';
import Login from '../components/Login';
import Signup from '../components/Signup';
import styles from '../App.module.css';
import LogoIconHeatherAi from "../assets/logo/logoIconHeatherAIpurple.svg"

function Registro() {
  const [walletAddress, setWalletAddress] = useState(Cookies.get('walletAddress') || '');
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <img className={styles.iconHeather} src={LogoIconHeatherAi} alt="Logo HeatherAI" />
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
    </div>
  );
}

export default Registro;
