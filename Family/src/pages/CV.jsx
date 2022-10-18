import React from 'react';
import AnimatePage from '../components/AnimatePage';

import styles from './CV.module.css';

import myImage from '../assets/images/resizeImg.jpg';

const CV = () => {
  return (
    <AnimatePage>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Curriculum Vitae</h1>
          <div className={styles['content__stack']}>
            <div className={styles['content__stack__description']}>
              <p>Current learning focus:</p>
              <p>Front-end: React</p>
              <p>Back-end : Django</p>
              <p>Databases : MySQL</p>
              <p>Cloud : AWS</p>
            </div>
            <div className={styles['content__stack__picture']}>
              <img src={myImage} alt='myimage' />
            </div>
          </div>
          <div className={styles['content__profileSummary']}>
            <p>
              The moment i decided to enter the coding profession, I used Google
              to pick out my preferred Front-end, Back-end and Database
              languages. I didn't pick only one of those because i knew that i
              wouldn't be satisfied by doing things half-way and i would
              definitely like to know how my input ends in a Database. After
              careful consideration and opportunity to enter a coding academy to
              learn Python i decided to pick React, Django and SQL as my top
              picks to learn/master and live by. So all the free time i have, i
              will invest into my picked languages and rest will come.
            </p>
            <p>
              So i have been stacking knowledge on my picked
              languages since September of 2021 and im still going strong!
            </p>
          </div>
          <h3>Languages & Current education</h3>
          <div className={styles['content__langEdu']}>
            <div className={styles['content__langEdu__languages']}>
              <p>Estonian - Native</p>
              <p>English - Working proficiency</p>
              <p>Russian - Verbal proficiency</p>
            </div>
            <div className={styles['content__langEdu__education']}>
              <span className={styles['content__langEdu__education__divider']}>
                <p>Academind - React</p>
                <p>Sept 2022 - Oct 2022</p>
                <p>
                  React - The Complete Guide (incl Hooks, React Router, Redux)
                </p>
              </span>
              <span className={styles['content__langEdu__education__divider']}>
                <p>Academind - JavaScript</p>
                <p>July 2022 - Sept 2022</p>
                <p>
                  JavaScript - The Complete Guide 2022 (Beginner + Advanced)
                </p>
              </span>
              <span className={styles['content__langEdu__education__divider']}>
                <p>Academind - CSS</p>
                <p>Apr 2022 - May 2022</p>
                <p>
                  CSS - The Complete Guide 2022 (incl. Flexbox, Grid & Sass)
                </p>
              </span>
              <span className={styles['content__langEdu__education__divider']}>
                <p>Software Development Academy - Python</p>
                <p>Oct 2021 - Jul 2022</p>
                <p>Weekends, Remote, Zoom, 100% participation.</p>
              </span>
            </div>
          </div>
          <div className={styles['content__contacts']}>
            <div className={styles['name']}>Jaanus Saar</div>
            <div className={styles['phone']}>+372 58218417</div>
            <div className={styles['email']}>Zaar2213@gmail.com</div>
            <div className={styles['location']}>Europe, Estonia, Tartu</div>
          </div>
          <div className={styles['content__links']}>
            <a href='https://github.com/The-Estonian'>GitHub</a>
            <a href='https://www.linkedin.com/in/jaanus-s-3897a721b/'>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default CV;
