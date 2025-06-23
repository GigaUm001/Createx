import React from 'react';
import { FaStar, FaClock, FaUser, FaFacebookF, FaBehance, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Section_2_hero from './../../assets/img/Section_2_hero.png';
import './Course.scss';

const Section_2 = () => {
  return (
    <div className="section-2">
      <div className="section-2-container">
        <div data-aos="flip-up" className="image-box">
          <img src={Section_2_hero} alt="Course Curator" />
        </div>
        <div className="text-box">
          <p data-aos="fade-left" className="label">Course Curator</p>
          <h2 data-aos="fade-right" className="name">Cody Fisher</h2>
          <p data-aos="fade-left" className="position">Senior UX designer in IT Product Company</p>

          <div data-aos="fade-right" className="info-stats">
            <div><FaStar /> 4.9 rate</div>
            <div><FaClock /> 4 courses</div>
            <div><FaUser /> 350 students</div>
          </div>

          <p data-aos="fade-left" className="description">
            Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante.
            Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam.
            Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non.
            Nam vel aliquam tristique sollicitudin interdum quam.
          </p>

          <div data-aos="fade-right" className="social-icons">
            <FaFacebookF />
            <FaBehance />
            <FaTwitter />
            <FaLinkedinIn/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_2;
