import { useState, useEffect } from 'react';
import sdk from '@crossmarkio/sdk';
import Cookies from 'js-cookie';
import styles from './App.module.css';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const storedWalletAddress = Cookies.get('walletAddress');
    const storedPassword = Cookies.get('password');
    if (storedWalletAddress && storedPassword) {
      setWalletAddress(storedWalletAddress);
    }
  }, []);

  async function connectWallet() {
    const { response } = await sdk.methods.signInAndWait();

    if (response.data.address !== undefined) {
      setWalletAddress(response.data.address);
    }
  }

  function handleSignup() {
    if (!walletAddress || !password) {
      alert('Por favor, crie uma senha e conecte sua carteira!');
      return;
    }

    Cookies.set('walletAddress', walletAddress);
    Cookies.set('password', password);
    setIsRegistering(false);
  }

  function handleLogin() {
    const storedPassword = Cookies.get('password');
    if (!password) {
      alert('Por favor, insira sua senha!');
      return;
    }

    if (storedPassword === password) {
      setIsLoggedIn(true);
    } else {
      alert('Senha incorreta!');
    }
  }

  async function transfer() {
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
  }

  if (isLoggedIn) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Bem-vindo!</h1>
        <p className={styles.text}>Você está logado com o endereço da carteira: {walletAddress}</p>

        <div>
          <h2 className={styles.subtitle}>Realizar Transação</h2>
          <input
            type="text"
            placeholder="Endereço de destino"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
            className={styles.input}
          />

          <input
            type="number"
            placeholder="Quantidade (em drops)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
          />

          <button onClick={transfer} className={styles.btn}>
            Enviar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{isRegistering ? 'Cadastro' : 'Login'}</h1>

      {!walletAddress && (
        <button onClick={connectWallet} className={styles.btn}>
          Conectar Carteira
        </button>
      )}

      {walletAddress && (
        <div>
          <p className={styles.text}>Carteira conectada: {walletAddress}</p>

          {isRegistering && !Cookies.get('password') && (
            <div>
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
          )}

          {!isRegistering && Cookies.get('password') && (
            <div>
              <h3 className={styles.subtitle}>Insira sua senha para login</h3>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
              />
              <button onClick={handleLogin} className={styles.btn}>
                Login
              </button>
            </div>
          )}

          {!isRegistering && !Cookies.get('password') && (
            <div>
              <button onClick={() => setIsRegistering(true)} className={styles.btn}>
                Criar Conta
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
