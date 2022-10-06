import React, { useState } from 'react';
import styles from './List.module.css';

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
      <ul className={styles.List}>
        {listItems.map((item) => (
          <li
            key={Math.random()}
            className={styles.ListItem}
            onClick={removeItem}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
