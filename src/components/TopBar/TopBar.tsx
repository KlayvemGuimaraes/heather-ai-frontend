import React, { useState, useEffect } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import styles from './TopBar.module.css';

// IMAGENS
import magnifying_glass from '../../assets/iconsTopBar/magnifying_glass.svg';
import info_square from '../../assets/iconsTopBar/info_square.svg';
import chevron_down from '../../assets/iconsTopBar/chevron_down.svg';
import notifications from '../../assets/iconsTopBar/notifications.svg';
import user_pfp from '../../assets/iconsTopBar/yasmine_pfp.png';

const Topbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        {/* BARRA DE PESQUISA */}
        <div className={styles.searchBar}>
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.input}
            />
            <img src={magnifying_glass} alt="Magnifying Glass Icon" />
          </div>
        </div>

        {/* OUTROS ACESSOS */}
        <div className={styles.userInfo}>
          {/* BOTÃO DE DARK/LIGHT MODE */}
          <div
            className={`${styles.toggleButton} ${
              isDarkMode ? styles.dark : styles.light
            }`}
            onClick={toggleDarkMode}
          >
            <div className={styles.circle}>
              {isDarkMode ? (
                <MdOutlineDarkMode size={18} color="#ffff" /> // Lua roxa
              ) : (
                <MdOutlineLightMode size={18} color="#9b59b6" /> // Sol roxo
              )}
            </div>
          </div>

          <div className={styles.user}>
            <img src={user_pfp} alt="User profile picture" />
            <label>@yasmine</label>
          </div>

          <button className={styles.deposit}>
            <img src={info_square} alt="Information Icon" />
            Deposit
          </button>

          <button className={styles.iconClick}>
            <img src={chevron_down} alt="Arrow Down" />
          </button>

          <button className={styles.iconClick}>
            <img
              className={styles.notifications}
              src={notifications}
              alt="Notification Icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;