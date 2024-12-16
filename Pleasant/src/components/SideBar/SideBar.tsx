import React from 'react';
import styles from './SideBar.module.css';
// import { FaTachometerAlt, FaUserCircle, FaMoneyBillAlt, FaUserTie, FaCog, FaQuestion } from 'react-icons/fa';
import Chart from "../../assets/iconsSideBar/Chart.svg"
import Buy from "../../assets/iconsSideBar/Buy.svg"
import Document from "../../assets/iconsSideBar/Document.svg"
import Chat from "../../assets/iconsSideBar/Chat.svg"
import Setting from "../../assets/iconsSideBar/Setting.svg"
import Wallet from "../../assets/iconsSideBar/Wallet.svg"
import Profile from "../../assets/iconsSideBar/Profile.svg"
import infoSquare from "../../assets/iconsSideBar/infoSquare.svg"


const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="../../src/assets/logo/LogoPleasant.svg" alt="Logo Pleasant" />
      </div>
      <div className={styles.content}>
        <ul>
          <h3 className={styles.containerTitle}>Menu</h3>
          <li>
            <a href="/home">
              <img src={Chart} className={styles.icon} />
              Dashboard
            </a>
          </li>
          <li>
            <a href="/Chat">
              <img src={Chat} className={styles.icon} />
              Chat
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Buy} className={styles.icon} />
              My Account
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Document} className={styles.icon} />
              Transactions
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Chat} className={styles.icon} />
              Customer Service
            </a>
          </li>
          <h3 className={styles.containerTitle}>Others</h3>
          <li>
            <a href="#">
              <img src={Setting} className={styles.icon} />
              Settings
            </a>
          </li>
          <li>
            <a href="/discover">
              <img src={Wallet} className={styles.icon} />
              Discover
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Profile} className={styles.icon} />
              Treasures
            </a>
          </li>
          <li>
            <a href="#">
              <img src={infoSquare} className={styles.icon} />
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
