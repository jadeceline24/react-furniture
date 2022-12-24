import {animate, motion} from 'framer-motion';
import React, {useEffect, useState} from 'react';
import '../styles/Banner.scss';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlay(true);
    }, 2000);
  }, []);
  return (
    <>
      <motion.div variants={banner} className="banner">
        <BannerTop title={'lou'} />
        <BannerCenter title={'furniture'} play={play} />
        <BannerBottom title={'decor'} />
      </motion.div>
    </>
  );
};

const AnimatedLetters = ({title, disabled}) => {
  return (
    <motion.span
      variants={disabled ? null : banner}
      initial="initial"
      animate="animate"
      className="row-title"
    >
      {/* select each letter */}

      {[...title].map((letter) => (
        <motion.span variants={letterAnimation} className="row-letter">
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const BannerTop = ({title}) => {
  return (
    <div className="banner-row">
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{opacity: 0, y: 80}}
        animate={{opacity: 1, y: 0}}
        transition={{ease: 'easeInOut', duration: 1, delay: 0.4}}
        className="row-col"
      >
        <span className="row-message">
          We create innovative, multi-functional furniture and space-saving
          solutions that are suitable for every setting.
        </span>
      </motion.div>
    </div>
  );
};
const BannerBottom = ({title}) => {
  return (
    <div className="banner-row center">
      <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1}}
        className="scroll"
      >
        <motion.span
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{ease: 'easeInOut', duration: 1, delay: 1.8}}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{ease: 'easeInOut', duration: 1, delay: 1.8}}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};
const BannerCenter = ({title, play, disabled}) => {
  return (
    <div className={`banner-row marquee ${play && 'animate'}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
};

export default Banner;
