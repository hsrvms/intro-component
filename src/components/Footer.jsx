import React from 'react';

import githubIcon from '../assets/github.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      Challange by{' '}
      <a href="https://www.frontendmentor.io/" target="_blank" rel="noreferrer">
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://github.com/hsrvms/intro-component"
        target="_blank"
        rel="noreferrer"
      >
        hsrvms
      </a>
      .
    </div>
  );
};

export default Footer;
