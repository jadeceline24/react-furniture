import React, {useEffect, useState} from 'react';
import Footer from './components/Footer';
import Main from './page/Main';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import HeroBanner from './components/HeroBanner';
import Subscribe from './components/Subscribe';

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    loader
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loader]);

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <div className="main-body">
          {loader ? (
            <motion.div className="" key="load">
              <Loader setLoader={setLoader} />
            </motion.div>
          ) : (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Main />} />
              </Routes>
              {!loader && (
                <div className="transition-image final ">
                  <motion.img
                    src="./images/image-2.jpg"
                    alt=""
                    layoutId="main-image-1"
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 1.6,
                    }}
                  />
                </div>
              )}
              <Products />
              <HeroBanner />
              <Subscribe />
              <Footer />
            </>
          )}
        </div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
