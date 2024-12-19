import { useState } from 'react';
import { MdOutlineWallet } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

import { useAuth } from '../providers/AuthProvider';

import ConnectWallet from '../components/ConnectWallet';

import { IWallet } from '../types/wallet.t';

import styles from '../App.module.css';

function Signin() {
  const auth = useAuth();

  const [wallet, setWallet] = useState<IWallet>({
    nickname: '',
    aderess: '',
    account_type: ''
  });
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (!wallet.aderess) {
      setErrorMessage('Conecte a sua carteira primeiro.');
      return;
    }

    const data = {
      wallet_address: wallet.aderess,
      password
    }

    const response = await auth.login(data);

    if (!response) {
      setErrorMessage('Carteira ou senha invalidas.');
      return;
    }
  };

  return (
    <div className={styles.containerBox}>
      {/* Exibe a mensagem de erro se houver */}
      {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}

      {!wallet.aderess && <ConnectWallet setWallet={setWallet} />}
      {wallet.aderess && (
        <div className={styles.connectedWalletBox}>
          <div style={{ marginTop: '0.8rem', marginLeft: '0.5rem' }}>
            <MdOutlineWallet color='#595959' size={25} />
          </div>
          <div>
            <div style={{ display: 'grid', alignItems: 'center' }}>
              <span style={{ color: '#616161', fontSize: '12px' }}>Carteira selecionada</span>
              <span style={{ color: '#000', fontSize: '13px' }}>{wallet.aderess}</span>
            </div>
          </div>
          <div style={{ marginTop: '0.8rem', marginRight: '-0.1rem' }}>
            <CiCircleCheck color='#2abc86' size={25} />
          </div>
        </div>
      )
      }
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.inputPassword}
        style={{ marginTop: '1em', marginBottom: '0.5rem' }}
      />
      <button onClick={handleLogin} className={styles.btnContinue}>
        Entrar
      </button>
    </div >
  );
}

export default Signin;
