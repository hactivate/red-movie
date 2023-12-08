import React from 'react';
import NETFLIX from '../assets/icons/undraw_netflix_q-00-o.svg';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero__container">
        <div className="hero__data">
          <h1 className="hero__title">
            Unlimited Movie, <br />
            Faster Easier
          </h1>
          <p className="hero__description">
            Unlimited movie streaming, faster and easier than ever. Enjoy seamless access to a vast
            entertainment library effortlessly
          </p>

          <a href="#" className="button btn btn-primary">
            Watch Now
          </a>
        </div>
        <img src={NETFLIX} alt="netflix" className="hero__img" />
      </div>
    </section>
  );
};

export default Hero;
