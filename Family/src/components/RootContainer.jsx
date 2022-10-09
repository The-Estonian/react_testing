import React, { useState, useEffect } from 'react';
import NavigationHeader from './NavigationHeader';

import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './RootContainer.module.css';

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 1,
};

const RootContainer = () => {
  const { pathname } = useLocation();

  return (
    <>
      <NavigationHeader />
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={pageTransition}
      >
        <main className={styles.mainContainer}>
          <Outlet />
        </main>
      </motion.div>
    </>
  );
};

export default RootContainer;
