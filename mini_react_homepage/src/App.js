import React, { useState } from "react"
import styles from './App.module.css';
import MainMenu from "./components/menu/MainMenu"
import ContentContainer from "./components/content-container/ContentContainer"

function App() {
  const [currentPage, setCurrentPage] = useState("Home")

  const changePageHandler = (page) => {
    setCurrentPage(page)
  }
  
  console.log(currentPage);
  return (
    <div className={styles.app}>
      <MainMenu onChangePage={changePageHandler}></MainMenu>
      <ContentContainer pageToTurn={currentPage}/>
    </div>
  );
}

export default App;
