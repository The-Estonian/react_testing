import React from 'react';
import styles from './Modal.module.css';
import CSSTransition from 'react-transition-group/CSSTransition';

const Modal2 = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.active}
      timeout={props.timeout}
      classNames={{
        enterActive: styles['example-enter-active'],
        enterDone: '',
        exitActive: styles['example-exit-active'],
        exitDone: '',
      }}
    >
      <div className={styles.Modal}>
        <h1>{props.children}</h1>
        <button className={styles.Button} onClick={props.returnSwitch}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal2;
