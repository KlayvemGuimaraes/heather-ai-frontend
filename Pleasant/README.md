# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```



<!-- 
import { useState, useEffect } from 'react';
import sdk from '@crossmarkio/sdk';
import './App.css';
import Cookies from 'js-cookie'; // Importando a biblioteca para manipulação de cookies

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState(''); // Senha será armazenada no estado
  const [destinationAddress, setDestinationAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verificar se o usuário já está logado ao carregar a página
  useEffect(() => {
    const storedWalletAddress = Cookies.get('walletAddress');
    const storedPassword = Cookies.get('password');
    
    if (storedWalletAddress && storedPassword) {
      setWalletAddress(storedWalletAddress);
      setPassword(storedPassword);
      setIsLoggedIn(true); // Usuário está logado se as informações estiverem no cookie
    }
  }, []);

  // Função para conectar a carteira
  async function connectWallet() {
    const { response } = await sdk.methods.signInAndWait();

    if (response.data.address !== undefined) {
      setWalletAddress(response.data.address);
      // Salvar o endereço da carteira no cookie
      Cookies.set('walletAddress', response.data.address);
    }
  }

  // Função de cadastro do usuário
  function handleSignup() {
    if (!walletAddress || !password) {
      alert('Por favor, crie uma senha e conecte sua carteira!');
      return;
    }

    // Salvar o endereço da carteira e a senha no cookie
    Cookies.set('walletAddress', walletAddress);
    Cookies.set('password', password);

    // Redirecionar para a tela de transação após cadastro
    setIsLoggedIn(true);
  }

  // Função de login
  function handleLogin() {
    const storedPassword = Cookies.get('password');
    if (!password) {
      alert('Por favor, insira sua senha!');
      return;
    }

    if (storedPassword === password) {
      // Senha está correta, logar o usuário
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
      <h1>{!walletAddress ? 'Cadastro' : 'Login'}</h1>

      {!walletAddress && (
        <button onClick={connectWallet} className="btn">
          Conectar Carteira
        </button>
      )}

      {walletAddress && (
        <div>
          <p>Carteira conectada: {walletAddress}</p>

          {!Cookies.get('password') && (
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

          {Cookies.get('password') && (
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
        </div>
      )}
    </div>
  );
}

export default App; -->
