import React from 'react';
import Picture from '../components/Picture';
import CSSTransition from 'react-transition-group/CSSTransition';

import styles from './Portfolio.module.css';

import pic1 from '../assets/images/calculator.jpg';
import pic2 from '../assets/images/collection.jpg';
import pic4 from '../assets/images/jsTesting.jpg';
import pic5 from '../assets/images/squirrel.jpg';
import pic6 from '../assets/images/starling.jpg';
import pic7 from '../assets/images/Game.jpg';
import pic8 from '../assets/images/monster_killer_game.jpg';
import pic9 from '../assets/images/django-proj.gif';
import pic10 from '../assets/images/orange-style.jpg';
import pic11 from '../assets/images/purple-style.jpg';
import pic12 from '../assets/images/green-style.jpg';

const Portfolio = () => {
  const portfolioObj = [
    {
      img: pic6,
      url: 'https://github.com/The-Estonian/7-animal-wiki-homework',
    },
    {
      img: pic2,
      url: 'https://github.com/The-Estonian/7-animal-wiki-homework',
    },
    {
      img: pic5,
      url: 'https://github.com/The-Estonian/7-animal-wiki-homework',
    },
    {
      img: pic10,
      url: 'https://github.com/The-Estonian/LMBS',
    },
    {
      img: pic11,
      url: 'https://github.com/The-Estonian/LMBS',
    },
    {
      img: pic12,
      url: 'https://github.com/The-Estonian/LMBS',
    },
    {
      img: pic9,
      url: 'https://github.com/The-Estonian/Django_project',
    },
    {
      img: pic7,
      url: 'https://github.com/The-Estonian/Python_tic_tac_toe',
    },
    {
      img: pic4,
      url: 'https://github.com/The-Estonian/sword_menu_tests',
    },
    {
      img: pic8,
      url: 'https://github.com/The-Estonian/monster_killer_game',
    },
    {
      img: pic1,
      url: 'https://github.com/The-Estonian/js_calculator',
    },
  ];
  return (
    <div className={styles.portfolio}>
      {portfolioObj.map((images) => (
        <a key={images.img} href={images.url} target='_blank'>
          <Picture img={images.img} />
        </a>
      ))}
    </div>
  );
};

export default Portfolio;
