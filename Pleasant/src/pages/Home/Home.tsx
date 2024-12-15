import React from 'react';
import styles from './Home.module.css'
import Sidebar from '../../components/SideBar/SideBar';
import TopBar from '../../components/TopBar/TopBar';

const Home = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
      
      <div className={styles.container_home}>
        <TopBar/>

        {/* Conteúdo da Home vai aqui */}

      </div>
    </div>
  );
};

export default Home;