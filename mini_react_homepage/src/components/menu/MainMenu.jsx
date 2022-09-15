import React from 'react';
import MenuItem from './MenuItem';

import styles from './MainMenu.module.css';

const MainMenu = (props) => {
  const changePageToHomeHandler = () => {
    props.onChangePage('Home');
  };
  const changePageToPicturesHandler = () => {
    props.onChangePage('Pictures');
  };
  const changePageToContactsHandler = () => {
    props.onChangePage('Contacts');
  };

  return (
    <div className={styles['main-menu']}>
      <MenuItem onClick={changePageToHomeHandler}>Home</MenuItem>
      <MenuItem onClick={changePageToPicturesHandler}>Pictures</MenuItem>
      <MenuItem onClick={changePageToContactsHandler}>Contacts</MenuItem>
    </div>
  );
};

export default MainMenu;
