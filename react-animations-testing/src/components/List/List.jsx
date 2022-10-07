import React, { useState } from 'react';
import styles from './List.module.css';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

const DUMMY_ITEMS = [1, 2, 3];
const List = () => {
  const [listItems, setListItems] = useState(DUMMY_ITEMS);

  const removeItem = (e) => {
    const removableItem = listItems.find(
      (item) => parseInt(e.target.textContent) === item
    );
    setListItems(listItems.filter((item) => item !== removableItem));
  };

  const addItem = () => {
    const newItem = listItems.length + 1;
    setListItems([...listItems, newItem]);
  };
  return (
    <div>
      <button className={styles.Button} onClick={addItem}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <TransitionGroup component='ul' className={styles.List}>
        {listItems.map((item) => (
          <CSSTransition
            key={item}
            timeout={500}
            classNames={{
              enter: styles.asd1,
              enterActive: styles.asd2,
              exit: styles.asd3,
              exitActive: styles.asd4,
            }}
          >
            <li className={styles.ListItem} onClick={removeItem}>
              {item}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default List;
