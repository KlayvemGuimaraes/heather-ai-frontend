import { useState, useEffect } from 'react';
import sdk from '@crossmarkio/sdk'; // Importando o SDK da Crossmark para conectar a carteira
import Cookies from 'js-cookie'; // Importando o js-cookie para armazenar os dados localmente
import styles from './App.module.css';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState('');
  const [destinationAddress, setDestinationAddress] = useState(''); // Estado para armazenar o endereço de destino da transação
  const [amount, setAmount] = useState(''); // Estado para armazenar a quantidade de tokens a ser transferido
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado que indica se o usuário está logado
  const [isRegistering, setIsRegistering] = useState(false); // Estado para controlar o modo de cadastro ou login

  useEffect(() => {
   // Verificando se o endereço da carteira e a senha estão armazenados nos cookies
    const storedWalletAddress = Cookies.get('walletAddress');
    const storedPassword = Cookies.get('password');
    if (storedWalletAddress && storedPassword) {
      setWalletAddress(storedWalletAddress);  // Caso exista, armazena o endereço da carteira no estado
    }
  }, []); // O useEffect é chamado apenas uma vez quando o componente é montado

  async function connectWallet() {
    // Conectando a carteira utilizando o SDK da Crossmark
    const { response } = await sdk.methods.signInAndWait();

    if (response.data.address !== undefined) {
      setWalletAddress(response.data.address); // Armazena o endereço da carteira retornado pela Crossmark
    }
  }

  function handleSignup() {
    // Função de cadastro, onde o usuário cria sua senha
    if (!walletAddress || !password) {
      alert('Por favor, crie uma senha e conecte sua carteira!');
      return;
    }

    // Armazenando o endereço da carteira e a senha nos cookies
    Cookies.set('walletAddress', walletAddress);
    Cookies.set('password', password);
    setIsRegistering(false);
  }
  // função de login
  function handleLogin() {
    const storedPassword = Cookies.get('password');
    if (!password) {
      alert('Por favor, insira sua senha!');
      return;
    }

    if (storedPassword === password) {
      setIsLoggedIn(true); // se estiver comparadamente correto ao cookie, loga
    } else {
      alert('Senha incorreta!'); // se não, senha incorreta
    }
  }

  async function transfer() {
    // Função para realizar a transação
    if (!destinationAddress || !amount) {
      alert('Por favor, preencha os campos de destino e quantidade!');
      return;
    }

    try {
      // Realizando a transação usando o SDK da Crossmark
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

  // Verificando se o usuário está logado para exibir a interface apropriada
  if (isLoggedIn) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Bem-vindo!</h1>
        <p className={styles.text}>Você está logado com o endereço da carteira: {walletAddress}</p>

        <div className={styles.containerBox}>
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

  // Caso o usuário não esteja logado, exibe a tela de login ou cadastro
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
          )}

          {!isRegistering && Cookies.get('password') && (
            <div className={styles.containerBox}>
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