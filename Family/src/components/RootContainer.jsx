import React from 'react'
import NavigationHeader from "./NavigationHeader"

import { Outlet } from "react-router-dom"

import styles from "./RootContainer.module.css"

const RootContainer = () => {
  return (
    <>
    <NavigationHeader/>
    <main className={styles.mainContainer}><Outlet/></main>
    </>
  )
}

export default RootContainer