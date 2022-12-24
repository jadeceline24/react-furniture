import {motion} from 'framer-motion';
import React from 'react';
import {banner} from '../Data';
import '../styles/HeroBanner.scss';

const hero = {
  initial: {
    x: 300,
  },
  animate: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2.5,
    },
  },
};
const heroimg = {
  out: {
    x: -300,
  },
  enter: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2.5,
    },
  },
};
const HeroBanner = () => {
  return (
    <div className="hero">
      {banner.map((banner) => (
        <div key={banner.id} className="hero-wrap">
          <motion.div
            variants={hero}
            initial={'initial'}
            whileInView={'animate'}
            viewport={{once: true}}
            className="hero-title"
          >
            <h3 className="title">{banner.title}</h3>
            <p className="desc">{banner.desc}</p>
          </motion.div>
          <motion.div
            variants={heroimg}
            initial={'out'}
            whileInView={'enter'}
            viewport={{once: true}}
            className="hero-image"
          >
            <img src={banner.img} alt={banner.alt} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
