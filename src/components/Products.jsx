import {motion} from 'framer-motion';
import React from 'react';
import {gallery} from '../Data';
import '../styles/Products.scss';

const scroll = {
  offscreen: {
    opacity: 0,
    y: 200,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const product = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const productanimate = {
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

const Products = () => {
  return (
    <div className="products">
      <motion.div
        variants={scroll}
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{once: true}}
        className="title"
      >
        <h2>enjoy our featured products</h2>
      </motion.div>
      <motion.div variants={product} className="gallery">
        {gallery.map((galleries) => (
          <div>
            <div className="gallery-wrap" key={galleries.id}>
              <div className="gallery-image-wrap">
                <motion.img
                  variants={productanimate}
                  initial={'initial'}
                  whileInView={'animate'}
                  viewport={{once: true}}
                  whileHover={{
                    scale: 1.2,
                  }}
                  src={galleries.img}
                  alt={galleries.alt}
                  className="gallery-image"
                />
              </div>
              <div className="image-title">
                <h3>{galleries.title}</h3>
                <p>{galleries.price}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="gallery-btn">
        <button className="btn">Shop All</button>
      </div>
    </div>
  );
};

export default Products;
