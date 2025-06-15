import React from 'react';
import Navigation from './../Navigation/Navigation.jsx';
import './Event.scss';
const Header = () => {
  return (
    <header className="page-header">
      <Navigation/>

      <div className="container header-content">
        <p className="header-label">COURSE</p>
        <h1 className="header-title">
          User Experience. Principles of Human-Centered Design
        </h1>
      </div>
    </header>
  );
};

export default Header;
