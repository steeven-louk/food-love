import React from 'react';
import './styles/navbar.scss';
import logo from './img/logo_top.png';
import { Menu } from '@material-ui/icons'
import { useState } from 'react';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

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
            <button className="toggle-button" onClick={()=> setToggle(!toggle)}> <Menu className='menuIcon'/> </button>
            <div className= {!toggle? 'subMenu' : 'affiche'}>
              <div className="bg">
              <a href="/" className="navbar__link">Home</a>
              <a href="/" className="navbar__link">About</a>
              <a href="/" className="navbar__link">Menu</a>
              <a href="/" className="navbar__link">Offer</a>
              <br />
              <a href="/" className="navbar__link">Gallery</a>
              <a href="/" className="navbar__link">Contact</a>
              <a href="/" className="navbar__link">Blog</a>
              </div>
            </div>
          </ul>
        </div> 
    </section>
  )
};

export default Navbar;
