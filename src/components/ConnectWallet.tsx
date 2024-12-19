import sdk from '@crossmarkio/sdk';
import styles from '../App.module.css';

import { IWallet } from '../types/wallet.t';

function ConnectWallet({ setWallet }: { setWallet: (wallet: IWallet) => void }) {
  const connectWallet = async () => {
    const { response } = await sdk.methods.signInAndWait();
    if (response.data.address) {
      setWallet({
        nickname: response.data.user.username,
        aderess: response.data.address,
        account_type: response.data.network.type,
      });
    }
  };

  return (
    <button onClick={connectWallet} className={styles.btnConnectWallet}>
      Conectar Carteira
    </button>
  );
}

export default ConnectWallet;
