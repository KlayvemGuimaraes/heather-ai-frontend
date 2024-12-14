import sdk from '@crossmarkio/sdk';
import styles from '../App.module.css';

function ConnectWallet({ setWalletAddress }: { setWalletAddress: (address: string) => void }) {
  const connectWallet = async () => {
    const { response } = await sdk.methods.signInAndWait();
    if (response.data.address) {
      setWalletAddress(response.data.address);
    }
  };

  return (
    <button onClick={connectWallet} className={styles.btn}>
      Conectar Carteira
    </button>
  );
}

export default ConnectWallet;
