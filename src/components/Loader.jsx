import React, {useEffect} from 'react';
import Image from './Image';
import '../styles/Loader.scss';
import {motion} from 'framer-motion';

//Variants
const container = {
  show: {
    duration: 5,
    transition: {

      staggerChildren: 0.35,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 0.5,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    ease: 'easeInOut',
    duration: 0.8,
  },
};

const itemMain = {
  hidden: {opacity: 0, y: 200},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};
const Loader = ({setLoader}) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoader(false);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // });

  return (
    <div className="loader">
      <motion.div
        className="loader-inner"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoader(false)}
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div className="transition-image" variants={itemMain}>
          <motion.img
            src="/images/image-2.jpg"
            alt=""
            layoutId="main-image-1"
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({id, variants}) => {
  return (
    <motion.div className={`image-block ${id}`} variants={variants}>
      <Image
        src={`/images/${id}.jpg`}
        alt={id}
        fallback={`/images/${id}.jpg`}
      />
    </motion.div>
  );
};

export default Loader;
