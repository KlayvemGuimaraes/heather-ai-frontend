import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Discover.module.css';
import Sidebar from '../../components/SideBar/SideBar';
import TopBar from '../../components/TopBar/TopBar';
import Bank from "../../assets/iconsDiscover/Bank.svg";
import Crypto from "../../assets/iconsDiscover/Crypto.svg";
import Trophy from "../../assets/iconsDiscover/Trophy.svg";
import Dollar from "../../assets/iconsDiscover/Dollar.svg";
import Star from "../../assets/iconsDiscover/Star.svg";

// Componente funcional para manipular navegação
const NavigationLinks = ({ navigate }) => {
  return (
    <ul className={styles.navList}>
      <li><button onClick={() => navigate('/for-you')} className={styles.navButton}>For You</button></li>
      <li><button onClick={() => navigate('/investments')} className={styles.navButton}>Investments</button></li>
      <li><button onClick={() => navigate('/cryptocurrency')} className={styles.navButton}>Cryptocurrency</button></li>
      <li><button onClick={() => navigate('/finance')} className={styles.navButton}>Finance</button></li>
      <li><button onClick={() => navigate('/your-goals')} className={styles.navButton}>Your Goals</button></li>
    </ul>
  );
};

const PreferenceButtons = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.preferenceButtons}>
      <button className={styles.containerButton} onClick={() => navigate('/investments')}>
        <img src={Bank} className={styles.icon} alt="Investments" />
        Investments
      </button>
      <button onClick={() => navigate('/cryptocurrency')}>
        <img src={Crypto} className={styles.icon} alt="Crypto" />
        Crypto
      </button>
      <button onClick={() => navigate('/your-goals')}>
        <img src={Trophy} className={styles.icon} alt="Your Goals" />
        Your Goals
      </button>
      <button onClick={() => navigate('/finance')}>
        <img src={Dollar} className={styles.icon} alt="Finance" />
        Finance
      </button>
      <button onClick={() => navigate('/defi-news')}>
        <img src={Star} className={styles.icon} alt="DeFi News" />
        DeFi News
      </button>
    </div>
  );
};

class Discover extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <TopBar />
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Discover</h1>
            <nav>
              <NavigationWrapper />
            </nav>
          </header>

          <div className={styles.mainGrid}>
            <section>
              <div className={styles.heroSection}>
                <img src="../src/assets/imagesDiscover/imageBitcoin.svg" alt="Special Bitcoin $100k" />
                <div className={styles.heroContent}>
                  <h2>Special Bitcoin $100k</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a eros et enim pretium commodo.
                  </p>
                </div>
              </div>

              <div className={styles.cardGrid}>
                <div className={styles.card}>
                  <img src="../src/assets/imagesDiscover/ImageCloud.svg" alt="Market Cap" />
                  <h3>MARKET CAP</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={styles.card}>
                  <img src="../src/assets/imagesDiscover/ImageRocket.svg" alt="Breaking News" />
                  <h3>BREAKING</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={styles.card}>
                  <img src="../src/assets/imagesDiscover/imageSmartphoneBitcoin.svg" alt="Last News" />
                  <h3>LAST NEWS</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </section>

            <aside className={styles.preferences}>
              <h3>Make your own way</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <PreferenceButtons />
              <hr className={styles.line} />
              <div className={styles.preferencesBtn}>
                <button className={styles.saveButton}>Save your preferences</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

// Envolver a navegação em um componente funcional
const NavigationWrapper = () => {
  const navigate = useNavigate();
  return <NavigationLinks navigate={navigate} />;
};

export default Discover;