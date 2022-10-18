import React, { useState, useEffect } from 'react';
import NavigationHeader from './NavigationHeader';
import AnimatePage from './AnimatePage';

import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './RootContainer.module.css';

const RootContainer = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <NavigationHeader />
      <main className={styles.mainContainer}>
        <AnimatePresence mode='wait'>
          <Outlet key={location}/>
        </AnimatePresence>
      </main>
    </>
  );
};

export default RootContainer;
