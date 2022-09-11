import React, { useReducer } from 'react';
import styles from './App.module.css';

import Button from './UI/Button';

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

const reducerFunction = (state, action) => {
  if (action.type === ACTIONS.INCREMENT) {
    return { count: state.count + 1 };
  } else if (action.type === ACTIONS.DECREMENT) {
    return { count: state.count - 1 };
  } else {
    return state
  }

};

const App = () => {
  // const [number, setNumber] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, { count: 0 });

  const increaseNumber = () => {
    // setNumber((prevNumber) => prevNumber + 1);
    dispatch({type: ACTIONS.INCREMENT});
  };

  const decreaseNumber = () => {
    // setNumber((prevNumber) => prevNumber - 1);
    dispatch({type: ACTIONS.DECREMENT});
  };

  return (
    <div className={styles.App}>
      <Button onClick={increaseNumber}>Increase</Button>
      {state.count}
      <Button onClick={decreaseNumber}>Decrease</Button>
    </div>
  );
};

export default App;
