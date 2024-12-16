import React from 'react';
import styles from './Chat.module.css';
import Sidebar from '../../components/SideBar/SideBar';
import TopBar from '../../components/TopBar/TopBar';

const Chat = () => {
  return (
    <>
     <Sidebar/>
     <TopBar/>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Ask anything about your goals</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.goalCards}>
          <div className={styles.goalCard}>
            {/* Goal card content */}
          </div>
          <div className={styles.goalCard}>
            {/* Goal card content */}
          </div>
          <div className={styles.goalCard}>
            {/* Goal card content */}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Ask about your goal"
            className={styles.input}
          />
          <button className={styles.submitButton}>Submit</button>
        </div>
      </main>
    </div>
    </>
  );
};

export default Chat;