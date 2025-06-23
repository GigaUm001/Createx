import React from 'react';

import Navigation from '../Navigation/Navigation.jsx';
import './Course.scss';
const Header = () => {


  return (
    <header>
      <div className='header-background'>

        <Navigation />
        <div className="container">
          <div className='header-content'>
            <p data-aos="fade-left" className="header-mini-text">COURSE</p>
            <h1 data-aos="fade-right" className="header-text">
              User Experience. Principles of Human-Centered Design
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
