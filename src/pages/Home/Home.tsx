import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from './Home.module.css';

// COMPONENTS
import Sidebar from '../../components/SideBar/SideBar';
import TopBar from '../../components/TopBar/TopBar';
import RevenueDiagram from '../../components/Diagrams/RevenueDiagram/RevenueDiagram';
import RevenueBDiagram from '../../components/Diagrams/RevenueBDiagram/RevenueBDiagram';
import TrasuresDiagram from '../../components/Diagrams/TreasuresDiagram/TreasuresDiagram';
import RatingDiagram from '../../components/Diagrams/RatingDiagram/RatingDiagram';
import TransactionsDiagram from '../../components/Diagrams/TransactionsDiagram/TransactionsDiagram';

const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Obtém o nome do usuário do cookie
    const nameFromCookie = Cookies.get('userName');
    setUserName(nameFromCookie || 'Visitante'); // Valor padrão caso o cookie esteja ausente
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      {/* Conteúdo da Home */}
      <div className={styles.homeScreen}>
        <div className={styles.container_home}>
          <TopBar />

          <h1 className={styles.title}>GM, {userName}</h1>

          <div className={styles.diagrams}>
            <div className={styles.leftDiagrams}>
              <RevenueDiagram />
              <div className={styles.bottomLeftDiagrams}>
                <RatingDiagram />
                <TransactionsDiagram />
              </div>
            </div>

            <div className={styles.rightDiagrams}>
              <TrasuresDiagram />
              <RevenueBDiagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
