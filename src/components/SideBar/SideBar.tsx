import { useAuth } from '../../providers/AuthProvider';

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
import { Link } from 'react-router-dom';
import LogoHeatherAI from "../../assets/logo/LogoHeatherAI.svg"

const Sidebar = () => {
  const auth = useAuth();

  function handleLougout() {
    auth.logout();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/home">
          <img src={LogoHeatherAI} alt="Logo HeatherAI" />
        </Link>
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
            <a href="/discover">
              <img src={Wallet} className={styles.icon} />
              Discover
            </a>
          </li>

          <li>
            <a href="/transactions">
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
            <a href="#">
              <img src={Profile} className={styles.icon} />
              Treasures
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
              <img src={infoSquare} className={styles.icon} />
              Help
            </a>
          </li>

          <li>
            <a onClick={() => handleLougout()} style={{ cursor: 'pointer' }}>
              <img src={infoSquare} className={styles.icon} />
              Logout
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
