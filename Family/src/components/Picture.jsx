import React from 'react'

import styles from "./Picture.module.css"

const Picture = (props) => {
  return (
    <div className={styles.picture}><img src={props.img}/></div>
  )
}

export default Picture