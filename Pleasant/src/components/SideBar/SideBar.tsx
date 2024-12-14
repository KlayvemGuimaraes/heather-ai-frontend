import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Menu</h3>
      </div>
      <div className={styles.content}>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">My Account</a></li>
          <li><a href="#">Transactions</a></li>
          <li><a href="#">Customer Service</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;