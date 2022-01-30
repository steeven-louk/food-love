import React from 'react';
import './styles/navbar.scss';
import logo from './img/logo_top.png'

const Navbar = () => {
  return (
    <section className='navbar'>
        <div className="navbar__container">
          <ul className="navbar_nav">
            <div className="nav-left">
              <a href="/" className="navbar__link">Home</a>
              <a href="/" className="navbar__link">About</a>
              <a href="/" className="navbar__link">Menu</a>
              <a href="/" className="navbar__link">Offer</a>
            </div>
            <img src={logo} alt='' className="navbar__logo"/>
            <div className="nav-right">
              <a href="/" className="navbar__link">Gallery</a>
              <a href="/" className="navbar__link">Contact</a>
              <a href="/" className="navbar__link">Blog</a>
            </div>
          </ul>
        </div>
    </section>
  )
};

export default Navbar;
