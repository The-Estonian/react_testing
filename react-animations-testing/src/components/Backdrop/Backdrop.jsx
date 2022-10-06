import React from 'react'
import styles from "./Backdrop.module.css"

const Backdrop = (props) => {
    const classVariable2 = `${styles.Backdrop} ${props.show ? styles.backdropOpen : styles.backdropClosed}`
  return (
    <div className={classVariable2} onClick={props.returnSwitch}></div>
  )
}

export default Backdrop