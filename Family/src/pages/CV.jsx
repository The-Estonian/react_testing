import React from 'react';

import styles from "./CV.module.css"

import myImage from "../assets/images/resizeImg.jpg"

const CV = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Curriculum Vitae</h1>
        <div className={styles["content__stack"]}>
          <div className={styles["content__stack__description"]}>
            <p>Current learning focus:</p>
            <p>Front-end: SASS/JavaScript</p>
            <p>Back-end Python : Django</p>
            <p>Databases : MySQL</p>
          </div>
          <div className={styles["content__stack__picture"]}>
            <img src={myImage} alt='myimage' />
          </div>
        </div>
        <div className={styles['content__profileSummary']}>
          I am an aspiring Developer who is working hard to perfect the mastery
          of full stack development. I like the idea of being able to complete a
          project from front-end to back-end. I have time and motivation, now I
          just need some work experience to thrive. Please check out my GitHub
          to see what I am working on!
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
              <p>Software Development Academy - Python</p>
              <p>Oct 2021 - Jul 2022</p>
              <p>Weekends, Remote, Zoom, 100% participation.</p>
            </span>
            <span className={styles['content__langEdu__education__divider']}>
              <p>Academind - CSS</p>
              <p>Apr 2022 - May 2022</p>
              <p>CSS - The Complete Guide 2022 (incl. Flexbox, Grid & Sass)</p>
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
          <a href='https://www.linkedin.com/in/jaanus-s-3897a721b/'>LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default CV;
