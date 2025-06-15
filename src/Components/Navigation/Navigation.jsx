import React from 'react'
import { Link } from "react-router";

import './Navigation.scss';
import './../../styles/App.scss';


import header_logo from './../../assets/logo/header_logo.svg'


const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div>
          <img src={header_logo} alt="" />
        </div>

        <ul>
          <li><Link path="/home">About us</Link></li>
          <li><Link path="/home">Courses</Link></li>
          <li><Link path="/home">Events</Link></li>
          <li><Link path="/home">Blog</Link></li>
          <li><Link path="/home">Contacts</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation