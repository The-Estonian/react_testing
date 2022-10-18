import React, { useState, useRef } from 'react';

import AnimatePage from '../components/AnimatePage';
import styles from './Login.module.css';

const Login = () => {
  const [loginRegister, setLoginRegister] = useState(true);
  const [loginState, setLoginState] = useState('');
  const firstName = useRef();
  const LastName = useRef();
  const Email = useRef();
  const Password = useRef();

  const loginOrRegisterHandler = () => {
    setLoginRegister(!loginRegister);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoginState(
      <div className={styles.centered}>
        <p>Backend currently in development.</p>
        <p>Registration/Login disabled</p>
      </div>
    );
  };

  return (
    <AnimatePage>
      <div className={styles.login}>
        {loginState}
        <form onSubmit={formSubmitHandler}>
          {!loginRegister && (
            <label>
              <span>First name</span>
              <input type='text' ref={firstName}></input>
            </label>
          )}
          {!loginRegister && (
            <label>
              <span>Last name</span>
              <input type='text' ref={LastName}></input>
            </label>
          )}
          <label>
            <span>Email</span>
            <input type='text' ref={Email}></input>
          </label>
          <label>
            <span>Password</span>
            <input type='password' ref={Password}></input>
          </label>
          <button type='submit'>{loginRegister ? 'Submit' : 'Register'}</button>
        </form>
        <p
          className={styles.loginSwitchButton}
          onClick={loginOrRegisterHandler}
        >
          {loginRegister
            ? 'Click here to Register account!'
            : 'Login to your account!'}
        </p>
      </div>
    </AnimatePage>
  );
};

export default Login;
