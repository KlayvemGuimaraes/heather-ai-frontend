import React from 'react';
import { useState } from 'react';
import styles from './Home.module.css'

// COMPONENTS
import Sidebar from '../../components/SideBar/SideBar';
import TopBar from '../../components/TopBar/TopBar';
import RevenueDiagram from '../../components/RevenueDiagram/RevenueDiagram';

const Home = () => {
  
  const [userName, setUserName] = useState('GM, Yasmine');

  return (
    <div className={styles.container}>
      
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
      
      <div className={styles.homeScreen}>
        <div className={styles.container_home}>
          <TopBar/>

          <h1 className={styles.title}>{userName}</h1>
          {/* Conteúdo da Home vai aqui */}
          <RevenueDiagram></RevenueDiagram>
        </div>
      </div>
    </div>
  );
};

export default Home;