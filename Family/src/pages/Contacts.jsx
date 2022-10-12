import React, { useRef } from 'react';

import LinkedIn from '../assets/images/LinkedIn.jpg';
import GitHub from '../assets/images/GitHub.jpg';

import copyButton from "../assets/images/copy.png"

import styles from './Contacts.module.css';
// onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}
const Contacts = () => {
  const fullNameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const asd = useRef();
  return (
    <div className={styles.picture}>
      <div>
      <p className={styles.contactInfo} ref={fullNameRef}>
        Jaanus Saar
        <button
          onClick={() => {
            navigator.clipboard.writeText(fullNameRef.current.textContent);
          }}
        ><img src={copyButton}/></button>
      </p>
      <div className={styles.contactInfo} >
        <p>Phone:</p>
        <p ref={phoneRef}>+37258218417</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(phoneRef.current.textContent);
          }}
        ><img src={copyButton}/></button>
      </div>
      </div>
      <div>
      <p className={styles.contactInfo} ref={addressRef}>
      Europe, Estonia, Tartu
        <button
          onClick={() => {
            navigator.clipboard.writeText(addressRef.current.textContent);
          }}
        ><img src={copyButton}/></button>
      </p>
      <p className={styles.contactInfo} ref={asd}>
        Zaar2213@gmail.com
        <button
          onClick={() => {
            navigator.clipboard.writeText(asd.current.textContent);
          }}
        ><img src={copyButton}/></button>
      </p>
        </div>
      <div>
      <a href='https://www.linkedin.com/in/jaanus-s-3897a721b/' target='_blank'>
        <img className={styles.contactImage} src={LinkedIn} />
      </a>
      <a href='https://github.com/The-Estonian' target='_blank'>
        <img className={styles.contactImage} src={GitHub} />
      </a>
      </div>
    </div>
  );
};

export default Contacts;
