import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
  const modalStyles = `${styles.Modal} ${
    props.show ? styles.modalOpen : styles.modalClosed
  }`;
  return (
    <div className={modalStyles}>
      <h1>{props.children}</h1>
      <button className={styles.Button} onClick={props.returnSwitch}>
        Dismiss
      </button>
    </div>
  );
};

export default Modal;
