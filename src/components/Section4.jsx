import React from 'react';
import './styles/section4.scss';
import imgLeft from './img/section4-left.png'


const Section4 = () => {

  return (

    <div className="section-4">
        <div className="section4-container">
            <div className="img-container">
                <img src={imgLeft} alt="" />
            </div>
            <div className="contenu">
                <h1>Enjoy Best Meal</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                </p>
            </div>
        </div>
    </div>

  )
};

export default Section4;
