import React, { useState } from 'react';
import AnimatePage from '../components/AnimatePage';
import EducationModule from '../components/EducationModule';

import styles from './CV.module.css';
import { educationList } from '../education/educationList';

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
            <p>Hello!</p>
            <p>
              My name is Jaanus and i thank you in advance for showing interest
              in my doings.
            </p>
            <p>
              I am currently focusing all my learnings into being able to create
              a Project from scratch and push it into the cloud.
            </p>
            <p>
              Being able to write some part of the code is half the fun. Seeing
              how everything comes to alive is where the real fun starts!
            </p>
          </div>
          <h3>Languages & Current education</h3>
          <div className={styles['content__langEdu']}>
            <div className={styles['content__langEdu__languages']}>
              <div>
                <p>
                  <i>Estonian</i>
                </p>
                <p>Native</p>
              </div>
              <div>
                <p>
                  <i>English</i>
                </p>
                <p>Working</p>
                <p>proficiency</p>
              </div>
              <div>
                <p>
                  <i>Russian</i>
                </p>
                <p>Verbal</p>
                <p>proficiency</p>
              </div>
            </div>
            <div className={styles['content__langEdu__education']}>
              {educationList.map((listItem) => (
                <EducationModule key={listItem.id} listData={listItem} />
              ))}
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
