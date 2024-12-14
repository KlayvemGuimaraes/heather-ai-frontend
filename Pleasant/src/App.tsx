import { useState, useEffect } from 'react';
import sdk from '@crossmarkio/sdk';
import './App.css';
import Cookies from 'js-cookie';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState(''); // Senha que será armazenada no estado
  const [destinationAddress, setDestinationAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Controle do estado de cadastro

  // Verificar se o usuário já está logado ao carregar a página
  useEffect(() => {
    const storedWalletAddress = Cookies.get('walletAddress');
    const storedPassword = Cookies.get('password');
    if (storedWalletAddress && storedPassword) {
      setWalletAddress(storedWalletAddress);
    }
  }, []);

  // Função para conectar a carteira
  async function connectWallet() {
    const { response } = await sdk.methods.signInAndWait();

    if (response.data.address !== undefined) {
      setWalletAddress(response.data.address);
    }
  }

  // Função para o cadastro de senha
  function handleSignup() {
    if (!walletAddress || !password) {
      alert('Por favor, crie uma senha e conecte sua carteira!');
      return;
    }

    // Salvar o endereço da carteira e a senha no cookie
    Cookies.set('walletAddress', walletAddress);
    Cookies.set('password', password);

    // Alterar o estado para exibir a tela de login após o cadastro
    setIsRegistering(false);
  }

  // Função de login
  function handleLogin() {
    const storedPassword = Cookies.get('password');
    if (!password) {
      alert('Por favor, insira sua senha!');
      return;
    }

    if (storedPassword === password) {
      // Se a senha estiver correta, loga o usuário
      setIsLoggedIn(true);
    } else {
      alert('Senha incorreta!');
    }
  }

  // Função para realizar a transação
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
        Amount: amount, // Quantidade em drops
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

  // Exibir a interface conforme o estado de login
  if (isLoggedIn) {
    return (
      <div className="container">
        <h1>Bem-vindo!</h1>
        <p>Você está logado com o endereço da carteira: {walletAddress}</p>

        <div>
          <h2>Realizar Transação</h2>
          <input
            type="text"
            placeholder="Endereço de destino"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
            className="input"
          />

          <input
            type="number"
            placeholder="Quantidade (em drops)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input"
          />

          <button onClick={transfer} className="btn">
            Enviar
          </button>
        </div>
      </div>
    );
  }

  // Caso o usuário não esteja logado, exibe a tela de cadastro ou login
  return (
    <div className="container">
      <h1>{isRegistering ? 'Cadastro' : 'Login'}</h1>

      {!walletAddress && (
        <button onClick={connectWallet} className="btn">
          Conectar Carteira
        </button>
      )}

      {walletAddress && (
        <div>
          <p>Carteira conectada: {walletAddress}</p>

          {/* Tela de cadastro */}
          {isRegistering && !Cookies.get('password') && (
            <div>
              <h3>Crie uma senha</h3>
              <input
                type="password"
                placeholder="Crie uma senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
              <button onClick={handleSignup} className="btn">
                Cadastrar
              </button>
            </div>
          )}

          {/* Tela de login */}
          {!isRegistering && Cookies.get('password') && (
            <div>
              <h3>Insira sua senha para login</h3>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
              <button onClick={handleLogin} className="btn">
                Login
              </button>
            </div>
          )}

          {/* Botão para alternar entre cadastro e login */}
          {!isRegistering && !Cookies.get('password') && (
            <div>
              <button onClick={() => setIsRegistering(true)} className="btn">
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
