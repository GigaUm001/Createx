import React from 'react'
import {
  FaFacebookF, FaTwitter, FaYoutube, FaTelegramPlane,
  FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Column 1 */}
        <div data-aos="fade-up" className="footer-column">
          <h2 className="logo">CREATE<span>X</span></h2>
          <p className="description">
            Createx Online School is a leader in online studying. We provide relevant approaches
            to online learning, internships and employment in the largest companies in the country.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaTelegramPlane />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Column 2 */}
        <div data-aos="fade-down" className="footer-column">
          <h4>Site Map</h4>
          <ul>
            <li>About Us</li>
            <li>Courses</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div data-aos="fade-up" className="footer-column">
          <h4>Courses</h4>
          <ul>
            <li>Marketing</li>
            <li>Management</li>
            <li>HR & Recruiting</li>
            <li>Design</li>
            <li>Development</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div data-aos="fade-down" className="footer-column">
          <h4>Contact Us</h4>
          <p><FaPhoneAlt /> (405) 555-0128</p>
          <p><FaEnvelope /> hello@createx.com</p>
        </div>

        {/* Column 5 */}
        <div data-aos="fade-up" className="footer-column">
          <h4>Sign up to our newsletter</h4>
          <div className="newsletter">
            <input type="email" placeholder="Email address" />
            <button>→</button>
          </div>
          <p className="note">
            *Subscribe to receive updates from Createx SEO Agency.
          </p>
        </div>
      </div>

      <div data-aos="fade-right" className="footer-bottom container">
        <p>© All rights reserved. Made with ❤️ by Createx Studio</p>
      </div>
    </footer>
  )
}

export default Footer
