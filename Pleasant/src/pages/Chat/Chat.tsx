import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Ícone de seta
import styles from './Chat.module.css';
import Sidebar from '../../components/SideBar/SideBar';
import TopBar from '../../components/TopBar/TopBar';

const Chat = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <TopBar />
      
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Título */}
          <h1 className={styles.title}>Ask anything about your goals</h1>

          {/* Três cartões no centro */}
          <div className={styles.goalCards}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>

          {/* Área de input com toggle e botão */}
          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Ask about your goal"
              className={styles.input}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
