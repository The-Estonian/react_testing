import React from 'react';

import { motion } from 'framer-motion';

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 1,
};

const AnimatePage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={pageTransition}
    >{children}</motion.div>
  );
};

export default AnimatePage;
