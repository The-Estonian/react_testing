import './App.css';
import React, { useState } from 'react';
import Backdrop from './components/Backdrop/Backdrop';
import Modal from './components/Modal/Modal';
import List from "./components/List/List"

function App() {
  const [blurOpen, setBlurOpen] = useState(false);
  const blurSwitch = () => {
    setBlurOpen(!blurOpen);
  };

  return (
    <div className='App'>
      <h1>React Animations</h1>
      <Modal show={blurOpen} returnSwitch={blurSwitch}>Hello</Modal>
      <Backdrop show={blurOpen} returnSwitch={blurSwitch} />
      <button className='Button' onClick={blurSwitch}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
