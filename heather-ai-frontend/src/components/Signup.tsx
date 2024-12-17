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
  const [passwordError, setPasswordError] = useState('');

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
    return '';
  };

  const handleSignup = () => {
    if (!walletAddress || !password) {
      alert('Por favor, crie uma senha e conecte sua carteira!');
      return;
    }

    // Valida a senha
    const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      return; // Se houver erro na validação, não prossegue
    }

    // Se a senha for válida, salva os dados
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
      
      {/* Exibe a mensagem de erro se houver */}
      {passwordError && <p className={styles.errorText}>{passwordError}</p>}

      <button onClick={handleSignup} className={styles.btn}>
        Cadastrar
      </button>
    </div>
  );
}

export default Signup;
