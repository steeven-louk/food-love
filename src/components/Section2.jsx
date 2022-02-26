import React from 'react';
import './styles/section2.scss'


const Section2 = ({data}) => {

  return (

    <div className="section-2">
      <div className="section_container">
        <h1 className="title">our food gallery</h1>
        <div className="grid-img">
            {data.map((imgD,index) =>{
              return (
                <img src={imgD.img} key={index} alt="" />
              )
            })}
        </div>
      </div>
    </div>

  )
};

export default Section2;
