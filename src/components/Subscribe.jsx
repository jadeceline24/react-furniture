import {motion} from 'framer-motion';
import React from 'react';
import '../styles/Subscribe.scss';

const subs = {
  initial: {
    opacity: 0,
    y:80,
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2.5,
    },
  },
};
const Subscribe = () => {
  return (
    <div className="subscribe">
      <motion.div
        variants={subs}
        initial={'initial'}
        whileInView={'animate'}
        viewport={{once: false}}
        className="subs-wrap"
      >
        <h3 className="title">BE PART OF OUR CLUB FOR DISCOUNT</h3>
        <input className="email" type="email" placeholder="Email" />
      </motion.div>
    </div>
  );
};

export default Subscribe;
