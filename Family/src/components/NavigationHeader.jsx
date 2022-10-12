import React from 'react';
import styles from './NavigationHeader.module.css';
import { dbVisualActions } from '../store/DatabaseConnectionVisual';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const NavigationHeader = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const currentStatus = useSelector((state) => state.dbStatus.ConnectionVisual);
  const connectionTrigger = () => {
    if (currentStatus.status === 'CONNECTED') {
      dispatch(
        dbVisualActions.refreshNotification({
          status: 'WORKING',
          title: 'Connection ready to be used',
        })
      );
    }
    if (currentStatus.status === 'WORKING') {
      dispatch(
        dbVisualActions.refreshNotification({
          status: 'BUSY',
          title: 'Connection ready to be used',
        })
      );
    }
    if (currentStatus.status === 'BUSY') {
      dispatch(
        dbVisualActions.refreshNotification({
          status: 'CONNECTED',
          title: 'Connection ready to be used',
        })
      );
    }
  };
  let activeStyling;
  if (currentStatus.status === 'CONNECTED') {
    activeStyling = styles['server-connection-ready'];
  }
  if (currentStatus.status === 'WORKING') {
    activeStyling = styles['server-connection-working'];
  }
  if (currentStatus.status === 'BUSY') {
    activeStyling = styles['server-connection-busy'];
  }
  let connectionStyle = `${activeStyling} ${styles.authNav}`;

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
      <li className={connectionStyle} onClick={connectionTrigger}>
        Connection
      </li>
      {isAuthenticated && (
        <li>
          <NavLink to='/profile' className={linkChecker}>
            Profile
          </NavLink>
        </li>
      )}
      {!isAuthenticated && (
        <li>
          <NavLink to='/login' className={linkChecker}>
            Login
          </NavLink>
        </li>
      )}
      {isAuthenticated && (
        <li>
          <p className={styles.notActiveLink}>Logout</p>
        </li>
      )}
    </ul>
  );
};

export default NavigationHeader;
