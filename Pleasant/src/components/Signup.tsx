import { useState } from 'react';
import Cookies from 'js-cookie';
import styles from '../App.module.css';

function Signup({
  walletAddress,
  onSuccess,
}: {
  walletAddress: string;
  onSuccess: () => void;
}) {
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!walletAddress || !password) {
      alert('Por favor, crie uma senha e conecte sua carteira!');
      return;
    }
    Cookies.set('walletAddress', walletAddress);
    Cookies.set('password', password);
    onSuccess();
  };

  return (
    <div className={styles.containerBox}>
      <h3 className={styles.subtitle}>Crie uma senha</h3>
      <input
        type="password"
        placeholder="Crie uma senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSignup} className={styles.btn}>
        Cadastrar
      </button>
    </div>
  );
}

export default Signup;
