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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
    >{children}</motion.div>
  );
};

export default AnimatePage;
