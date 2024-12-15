import React, { Component } from 'react';
import styles from './Discover.module.css';
import Sidebar from '../../components/SideBar/SideBar';
import TopBar from '../../components/TopBar/TopBar';

class Discover extends Component {
  render() {
    return (
      <>
        <Sidebar/>
        <TopBar/>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Discover</h1>
            <nav>
              <ul className={styles.navList}>
                <li><a href="#">For You</a></li>
                <li><a href="#">Investments</a></li>
                <li><a href="#">Cryptocurrency</a></li>
                <li><a href="#">Finance</a></li>
                <li><a href="#">Your Goals</a></li>
              </ul>
            </nav>
          </header>

          <main>
            <section className={styles.hero}>
              <img src="../src/assets/imagesDiscover/imageBitcoin.svg" alt="Special Bitcoin $100k" />
              <div>
                <h2>Special Bitcoin $100k</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a eros et enim pretium, commodo. Aenean pharetra, velit et consequat malesuada, orci dui iucepit erat, a.</p>
              </div>
            </section>

            <section className={styles.features}>
              <div className={styles.feature}>
                <img src="../src/assets/imagesDiscover/ImageCloud.svg" alt="CUBE DA SUAS CHAVES" />
                <h3>MARKET CAP</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a eros et enim pretium, commodo.</p>
              </div>
              <div className={styles.feature}>
                <img src="../src/assets/imagesDiscover/ImageRocket.svg" alt="SEU DESEMPENHO" />
                <h3>BREAKING</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a eros et enim pretium, commodo.</p>
              </div>
              <div className={styles.feature}>
                <img src="../src/assets/imagesDiscover/imageSmartphoneBitcoin.svg" alt="LAST NEWS" />
                <h3>LAST NEWS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a eros et enim pretium, commodo.</p>
              </div>
            </section>
          </main>

          <footer className={styles.footer}>
            <p>&copy; 2024 Discover. All rights reserved.</p>
          </footer>
        </div>
      </>
    );
  }
}

export default Discover;