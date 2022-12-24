import React from 'react';
import {useState} from 'react';
import '../styles/Navbar.scss';
import {menu} from '../Data';
import {motion} from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <motion.div
      initial={{opacity: 0, y: -100}}
      animate={{opacity: 1, y: 0}}
      transition={{ease: 'easeInOut', duration: 1, delay: 0.6}}
      className="header"
    >
      <div className="header-wrap">
        <div className="logo">Lou Furniture</div>

        <nav
          className={active ? 'mobile-nav' : 'nav'}
          onClick={() => setActive(!active)}
        >
          {menu.map((menus) => (
            <li key={menus.id}>
              <a href={menus.link}>{menus.name}</a>
            </li>
          ))}
        </nav>

        <div className="contact">
          <a href="#">Contact</a>
        </div>
        <div className="menu" onClick={() => setActive(!active)}>
          <div className={active ? 'close' : 'open'}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
