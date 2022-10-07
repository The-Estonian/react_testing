import React from 'react';
import styles from './Modal.module.css';
import Transition from 'react-transition-group/Transition';

const Modal = (props) => {
  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={props.active}
      timeout={props.timeout}
      onEnter={() => console.log("OnEnter")}
      onEntering={() => console.log("OnEntering")}
      onEntered={() => console.log("OnEntered")}
      onExit={() => console.log("OnExit")}
      onExiting={() => console.log("OnExiting")}
      onExited={() => console.log("OnExited")}
    >
      {(state) => {
        const modalStyles = `${styles.Modal} ${
          state === 'entering'
            ? styles.modalOpen
            : state === 'exiting'
            ? styles.modalClosed
            : null
        }`;
        return (
          <div className={modalStyles}>
            <h1>{props.children}</h1>
            <button className={styles.Button} onClick={props.returnSwitch}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default Modal;
