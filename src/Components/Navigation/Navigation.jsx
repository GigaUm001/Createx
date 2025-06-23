import React from 'react';
import { Link } from 'react-router';
import './Navigation.scss';
import './../../styles/App.scss';
import header_logo from './../../assets/logo/header_logo.svg';
import { FiUser } from 'react-icons/fi'; // иконка для "Login/Register"

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className='nav-content'>
          <div className="logo">
            <img src={header_logo} alt="Createx Logo" />
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/course">Course</Link></li>
            <li><Link to="/event">Events</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>

          <div className="nav-actions">
            <button className="consultation-btn">Get consultation</button>
            <Link to="/login" className="login-link">
              <FiUser className="user-icon" />
              Log in / Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
