import React from 'react';
import { useState } from 'react';
import styles from './TopBar.module.css';

// IMAGENS
import magnifying_glass  from '../../assets/iconsTopBar/magnifying_glass.svg'
import info_square  from '../../assets/iconsTopBar/info_square.svg'
import chevron_down  from '../../assets/iconsTopBar/chevron_down.svg'
import notifications  from '../../assets/iconsTopBar/notifications.svg'
import user_pfp  from '../../assets/iconsTopBar/yasmine_pfp.png'

const Topbar = () => {

  const [searchQuery, setSearchQuery] = useState('');

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
            <img src={magnifying_glass} alt='Magnifying Glass Icon'></img>
          </div>
        </div>

        {/* OUTROS ACESSOS */}
        <div className={styles.userInfo}>
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
            <img className={styles.notifications} src={notifications} alt="Notification Icon" />
          </button>
        </div>
        </div>
          
    </div>
  );
};

export default Topbar;