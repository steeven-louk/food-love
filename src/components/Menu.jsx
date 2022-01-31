import React from 'react';
import './styles/menu.scss'

const Menu = ({data}) => {
  return (

    <section className="menu__section">
      <div className="menu_container">
        <h1 className='titre'>our menus</h1>
        <div className="card__section">
            {data.map((item) =>{
              return (
                <div className="card" key={item.id}>
            <img src={item.img} alt={item.title} className="card-img-top" />
            <div className="card-body">
              <h1 className="card-title"> {item.title} </h1>
              <p className="card-text">{item.description}</p>
              <div className="card-price">Price: ${item.price},00 </div>
            </div>
          </div>
              )
            })}
        </div>
      </div>
    </section>

  )
};

export default Menu;
