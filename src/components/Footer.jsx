import React from 'react';
import '../styles/Footer.scss';
import {footer} from '../Data';
import {footer2} from '../Data';
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <h1>LOU FURNITURE</h1>
      </div>
      <div className="footer-wrap">
        <div className="left">
          {footer.map((footer) => (
            <div key={footer.id} className="left-wrap">
              <li className="title">{footer.title}</li>
              <li className="desc-wrap">{footer.desc.map((desc, ind)=>(
                <a className='desc' href="#" key={ind}>{desc}</a>
              ))}</li>
            </div>
          ))}
        </div>

        <div className="center">
          <div className="circle"></div>
        </div>

        <div className="right">
          {footer2.map((footer2) => (
            <div key={footer2.id} className="right-wrap">
              <li className="title">{footer2.title}</li>
              <li className="desc-wrap">{footer2.desc.map((desc, ind)=>(
                <a className='desc' href="#" key={ind}>{desc}</a>
              ))}</li>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">
        <div className="copy">ⓒ LOU | 2022</div>
        <div className="develop">DESIGN & DEV BY JC</div>
      </div>
    </div>
  );
};

export default Footer;
