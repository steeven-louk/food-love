import React from 'react';
import './styles/footer.scss';
import logoFooter from './img/logo-footer.png';
import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons';

const Footer = () => { 
  return (
    <section className="footer-section">
        <div className="footer-container">
            <img src={logoFooter} alt="" />
            <div className="nav">
                <li>home</li>
                <li>about us</li>
                <li>services</li>
                <li>foods</li>
                <li>contact</li>
                <li>location</li>
            </div>
            <div className="social-icon">
               <Facebook className='icon' />
               <Twitter className='icon' />
               <Instagram className='icon' />
               <Pinterest className='icon' />
               
            </div>
        </div>
    </section>
  );
};

export default Footer;
