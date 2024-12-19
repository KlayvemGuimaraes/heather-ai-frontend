import { useState } from 'react';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import styles from '../App.module.css';
import LogoIconHeatherAi from "../assets/logo/logoIconHeatherAIpurple.svg"

function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.iconHeather} src={LogoIconHeatherAi} alt="Logo HeatherAI" />
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Bem-vindo!</h1>
          <span className={styles.subtitle}>Entre com sua conta ou crie uma nova<br /> para acessar nossa plataforma.</span>
        </div>
        <div className={styles.switchActionBox}>
          <button className={isRegistering ? styles.switchActionBtn : styles.switchActionBtnActive} onClick={() => setIsRegistering(false)}>Login</button>
          <button className={isRegistering ? styles.switchActionBtnActive : styles.switchActionBtn} onClick={() => setIsRegistering(true)}>Criar Conta</button>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          {!isRegistering ? (
            <Signin />
          ) : (
            <Signup />
          )}
        </div>
      </div>
    </div >
  );
}

export default Auth;
