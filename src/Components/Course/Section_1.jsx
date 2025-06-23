import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import './Course.scss';

const Section_1 = () => {
  const items = [
    'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
    'Vulputate placerat amet pulvinar lorem nisl.',
    'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
    'Etiam duis lobortis in fames ultrices commodo nibh.',
    'Fringilla in nec risus congue venenatis pretium posuere nec.',
    'Cursus eu pretium, vulputate tempus quam massa sed at.',
  ];

  return (
    <div className="container">
      <div className="section-1-parent">
        <div className="parent-texts">
          <div data-aos="flip-left" className="text-top">About the course</div>
          <div className="text-bottom">
            <p data-aos="flip-left">
              Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis
              maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus
              sit cras at malesuada diam.
              Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare
              nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque.
            </p>
            <h4 data-aos="flip-right">You will learn:</h4>
            <ul data-aos="flip-right">
              {items.map((item, index) => (
                <li key={index} className="list-item">
                  <AiOutlineCheckCircle className="icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-1-card">
          <div data-aos="fade-right" className="card-item">
            <div className="title">Dates</div>
            <div className="value">Sept 7 – Nov 2</div>
            <div className="desc">Metus turpis sit lorem lacus, in elit tellus lacus.</div>
          </div>
          <div data-aos="fade-left" className="card-item">
            <div className="title">Duration</div>
            <div className="value">2 months – 8 lessons</div>
            <div className="desc">Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</div>
          </div>
          <div data-aos="fade-right" className="card-item">
            <div className="title">Price</div>
            <div className="value">$120 per month</div>
            <div className="desc">
              Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.
            </div>
          </div>
          <button data-aos="fade-left" className="btn">Join the course</button>
        </div>
      </div>
    </div>
  );
};

export default Section_1;
