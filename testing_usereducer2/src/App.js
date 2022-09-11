import React, { useState, useReducer } from 'react';
import Button from './UI/Button';

import styles from './App.module.css';

const ACTIONS = {
  ADD_TODO: 'add-todo',
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.ADD_TODO) {
    return [...state, {ToDo: action.val, complete: false, id: Math.random()}]    
  }
};

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, val: name });
    setName('');
    console.log(todos)
  };
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  return (
    <div className={styles.app}>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <Button>Todo</Button>
      </form>
      {todos.map(todo => <p key={todo.id}>{todo.ToDo}</p>)}
    </div>
  );
}

export default App;
