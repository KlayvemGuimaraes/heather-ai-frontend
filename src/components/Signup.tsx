import { useState } from 'react';
import { MdOutlineWallet } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

import ConnectWallet from '../components/ConnectWallet';

import { IWallet } from '../types/wallet.t';

import { api } from '../services/api';
import { useAuth } from '../providers/AuthProvider';

import styles from '../App.module.css';

function Signup() {
  const auth = useAuth();

  const [wallet, setWallet] = useState<IWallet>({
    nickname: '',
    aderess: '',
    account_type: ''
  });

  const [password, setPassword] = useState('');
  const [passwordR, setPasswordR] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Função para validar a senha
  const validatePassword = (password: string) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
      return 'A senha deve ter pelo menos 8 caracteres.';
    }
    if (!hasNumber.test(password)) {
      return 'A senha deve conter pelo menos um número.';
    }
    if (!hasSpecialChar.test(password)) {
      return 'A senha deve conter pelo menos um símbolo especial.';
    }
    if (password !== passwordR) {
      return 'As senhas não conferem.';
    }
    return '';
  };

  const handleSignup = async () => {
    if (!wallet.aderess) {
      setErrorMessage('Por favor, conecte uma carteira primeiro.');
      return;
    }

    // Valida a senha
    const error = validatePassword(password);
    if (error) {
      setErrorMessage(error);
      return; // Se houver erro na validação, não prossegue
    }

    try {
      await api.post('/users', {
        nickname: wallet.nickname,
        wallet_address: wallet.aderess,
        account_type: wallet.account_type,
        password
      });

      const data = {
        wallet_address: wallet.aderess,
        password,
        remember: false,
      }

      auth.login(data);
    } catch {
      setErrorMessage('Essa carteira ja possuí uma conta cadastrada.');
      return; // Se houver erro na validação, não prossegue
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
              <span style={{ color: '#616161', fontSize: '12px' }}>Carteira conectada</span>
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
        placeholder="Crie uma senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.inputPassword}
        style={{ marginTop: '1em', marginBottom: '0.5rem' }}
      />

      <input
        type="password"
        placeholder="Digite a senha novamente"
        value={passwordR}
        onChange={(e) => setPasswordR(e.target.value)}
        className={styles.inputPassword}
        style={{ marginTop: '1em', marginBottom: '0.5rem' }}
      />

      <button onClick={handleSignup} className={styles.btnContinue}>
        Criar Conta
      </button>
    </div>
  );
}

export default Signup;
