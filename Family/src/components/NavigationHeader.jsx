import React from 'react';
import styles from './NavigationHeader.module.css';

import { NavLink } from 'react-router-dom';

const NavigationHeader = () => {
  const linkChecker = ({ isActive }) =>
    isActive ? styles.activeLink : styles.notActiveLink;
  return (
    <ul className={styles.navigation}>
      <li>
        <NavLink to='/' className={linkChecker} end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/skills' className={linkChecker}>
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to='/cv' className={linkChecker}>
          CV
        </NavLink>
      </li>
      <li>
        <NavLink to='/portfolio' className={linkChecker}>
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to='/contacts' className={linkChecker}>
          Contacts
        </NavLink>
      </li>
      <li className={styles.serverConnection}>
        Connection
      </li>
      <li>
        <NavLink to='/profile' className={linkChecker}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to='/login' className={linkChecker}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationHeader;
