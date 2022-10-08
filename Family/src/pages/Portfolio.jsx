import React from 'react';
import Picture from '../components/Picture';

import styles from "./Portfolio.module.css"

import pic1 from "../assets/images/calculator.jpg"
import pic2 from "../assets/images/collection.jpg"
import pic3 from "../assets/images/my_tic_tac_toe.jpg"
import pic4 from "../assets/images/jsTesting.jpg"
import pic5 from "../assets/images/squirrel.jpg"
import pic6 from "../assets/images/starling.jpg"

const Portfolio = () => {
  const pictureArray = [pic1, pic2, pic3, pic4, pic5, pic6];
  return (
    <div className={styles.portfolio}>
      {pictureArray.map(images => <Picture img={images}/>)}
    </div>
  );
};

export default Portfolio;
