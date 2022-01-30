import React from 'react';
import './styles/heros.scss';
import imgLeft from './img/hero_left.png'

const Heros = () => {
  return (

    <section className="heros__section">
      <div className="hero__container">
        <div className="container__left">
          <div className="left-content">
           <img src={imgLeft} alt="" />
          </div>
        </div>
        <div className="container__right">
          <div className="right-content">
            <h1>contact us for beast breakfast </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor, in minus neque vitae fuga magni placeat doloremque consectetur.
            </p>
            <a href="/" className="contact-btn">contact us</a>
          </div>
        </div>
      </div>
    </section>

    )
};

export default Heros;
