import React, { Component } from 'react';
import styles from './Discover.module.css';
import Sidebar from '../../components/SideBar/SideBar';
import TopBar from '../../components/TopBar/TopBar';

class Discover extends Component {
  render() {
    return (
      /* Div geral que cobre todo o componente da página Discover*/
      <div className={styles.wrapper}>
        {/* Div que corrige o espaço da sidebar */}
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <TopBar />
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Discover</h1>
            <nav>
              <ul className={styles.navList}>
                <li><a href="#" className="active">For You</a></li>
                <li><a href="#">Investments</a></li>
                <li><a href="#">Cryptocurrency</a></li>
                <li><a href="#">Finance</a></li>
                <li><a href="#">Your Goals</a></li>
              </ul>
            </nav>
          </header>

          <div className={styles.mainGrid}>
            {/* Main Section */}
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

              {/* Card Grid */}
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

            {/* Preferences Section */}
            <aside className={styles.preferences}>
              <h3>Make your own way</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className={styles.preferenceButtons}>
                <button>Investments</button>
                <button>Crypto</button>
                <button>Your Goals</button>
                <button>Finance</button>
                <button>DeFi News</button>
              </div>
              <hr/>
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

export default Discover;
