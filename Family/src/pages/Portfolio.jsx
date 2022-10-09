import React from 'react';
import Picture from '../components/Picture';
import CSSTransition from 'react-transition-group/CSSTransition';

import styles from './Portfolio.module.css';

import pic1 from '../assets/images/calculator.jpg';
import pic2 from '../assets/images/collection.jpg';
import pic3 from '../assets/images/my_tic_tac_toe.jpg';
import pic4 from '../assets/images/jsTesting.jpg';
import pic5 from '../assets/images/squirrel.jpg';
import pic6 from '../assets/images/starling.jpg';
import pic7 from '../assets/images/Game.jpg';
import pic8 from '../assets/images/monster_killer_game.jpg';
import pic9 from '../assets/images/django-proj.gif';

const Portfolio = () => {
  const pictureArray = [pic9, pic2, pic5, pic6, pic3, pic7 , pic4, pic8, pic1];
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={true}
      timeout={300}
      classNames={{
        enterActive: styles['enter-portfolio'],
        enterDone: '',
        exitActive: styles['exit-portfolio'],
        exitDone: '',
      }}
    >
      <div className={styles.portfolio}>
        {pictureArray.map((images) => (
          <Picture key={images} img={images} />
        ))}
      </div>
    </CSSTransition>
  );
};

export default Portfolio;
