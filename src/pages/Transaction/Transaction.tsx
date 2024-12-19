import Transaction from '../../components/CardTransaction/CardTransaction';
import Cookies from 'js-cookie';
import styles from '../../App.module.css';
import Sidebar from '../../components/SideBar/SideBar';
import Topbar from '../../components/TopBar/TopBar';
import stylesTransaction from "./Transaction.module.css"

function Transacao() {
  const walletAddress = Cookies.get('walletAddress');
  
  if (!walletAddress) {
    return <p>Você não está logado. Volte para a página inicial.</p>;
  }

  return (
    <>
    <div className={stylesTransaction.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
      <Topbar/>
        <div className={stylesTransaction.container}>
          <h1 className={styles.title}>Bem-vindo!</h1>
          <p className={styles.text}>Você está logado com o endereço da carteira: {walletAddress}</p>
            <Transaction walletAddress={walletAddress} /> {/* Transacao*/}
        </div>
    </div>
    </>
  );
}

export default Transacao;
