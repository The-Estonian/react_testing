import React from 'react'
import styles from "./MenuItem.module.css"

const MenuItem = (props) => {
  return (
    <div className={styles["menu-item"]} onClick={props.onClick}>{props.children}</div>
  )
}

export default MenuItem