import './App.css';
import React, { useState } from 'react';
import Backdrop from './components/Backdrop/Backdrop';
import Modal from './components/Modal/Modal';
import Modal2 from './components/Modal/Modal2';
import List from './components/List/List';

function App() {
  const [blurOpen, setBlurOpen] = useState(false);
  const blurSwitch = () => {
    setBlurOpen(!blurOpen);
  };

  return (
    <div className='App'>
      <h1>React Animations</h1>

      {/* <Modal active={blurOpen} returnSwitch={blurSwitch} timeout={{enter: 200, exit: 1000}}>
        <p>Hello</p>
      </Modal> */}
      <Modal2 active={blurOpen} returnSwitch={blurSwitch} timeout={500}>
      <p>New Modal!</p>
      </Modal2>
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
