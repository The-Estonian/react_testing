import React from 'react';
import styles from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? `${styles['header-link']} ${styles['active']}`
                  : styles['header-link']
              }
              end
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/pictures'
              className={({ isActive }) =>
                isActive
                  ? `${styles['header-link']} ${styles['active']}`
                  : styles['header-link']
              }
            >
              Pictures
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive
                  ? `${styles['header-link']} ${styles['active']}`
                  : styles['header-link']
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
