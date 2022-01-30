import React from 'react';
import './styles/about.scss';
import about_img from './img/img_about.png'

const About = () => {
  return (
    <section className="about__section">
        <div className="about__container">
          <img src={about_img} alt="" />
          <div className="text">
            <h1>About Us</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint blanditiis, earum ratione debitis corrupti culpa quis? Blanditiis quae voluptate non, neque impedit aliquid labore eveniet suscipit. Earum aliquid iste alias cum beatae. Assumenda, ducimus laborum.
            </p>
          </div>
        </div>
    </section>
  )
};

export default About;
