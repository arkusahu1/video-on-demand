import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

/**
 * Its a functional component uded to display header having navigation link of Home and History
 */
const Header = () => {
  return (
    <header className={styles.headerContainer} data-test-id="headerContainer">
      <Link className={styles.vodBtn} to="/">
        VOD
      </Link>
      <div>
        <Link className={styles.hLink} to="/">
          Home
        </Link>
        <Link className={styles.hLink} to="/history">
          History
        </Link>
      </div>
    </header>
  );
};

export default Header;
