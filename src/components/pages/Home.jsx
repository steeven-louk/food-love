import React from 'react';
import About from '../About';
import Data_img from '../data/Data_img';
import Heros from '../Heros';
import Menu from '../Menu';
import Navbar from '../Navbar';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';

export default function Home() {
  return (
      <section style={{ 'background-color':' #1d1d23' }}> 
        <Navbar />
        <Heros/> 
        <About />
        <Section1 />
        <Section2 data={Data_img.grid}/>
        <Section3 />
        <Menu data={Data_img.menu} />
      </section>
  );
}
