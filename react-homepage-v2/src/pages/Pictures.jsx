import React, { useEffect, useState } from 'react';

import styles from "./Pictures.module.css"

const Pictures = () => {
  const [pictures, setPictures] = useState([]);

  const fetchServerData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1/photos'
    );
    if (!response.ok) {
      throw new Error('Server connection error!');
    }
    const data = await response.json();
    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i].id);
        
    // }
    setPictures(data)
  };
console.log(pictures);
  useEffect(() => {
    fetchServerData();
  }, []);
  return <div className={styles["picture-container"]}>
    {pictures.map(item => <div>
        <p>{item.id}</p>
        <h3>{item.title}</h3>
        <img src={item.thumbnailUrl} alt={item.title}></img>
        </div>)}
  </div>;
};

export default Pictures;

// albumId: 3
// ​​​
// id: 102
// ​​​
// thumbnailUrl: "https://via.placeholder.com/150/a393af"
// ​​​
// title: "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt"
// ​​​
// url: "https://via.placeholder.com/600/a393af"
