import React from 'react';
import styles from './ContentContainer.module.css';
import Homepage from '../content/Homepage';
import Pictures from '../content/Pictures';
import Contacts from '../content/Contacts';

const ContentContainer = (props) => {
  let content;
  if (props.pageToTurn === 'Home') {
    content = <Homepage />;
  } else if (props.pageToTurn === 'Pictures') {
    content = <Pictures />;
  } else if (props.pageToTurn === 'Contacts') {
    content = <Contacts />;
  }
  return <div className={styles['content-container']}>{content}</div>;
};

export default ContentContainer;
