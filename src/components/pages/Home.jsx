import React from 'react';
import About from '../About';
import Heros from '../Heros';
import Menu from '../Menu';
import Navbar from '../Navbar';
import Section1 from '../Section1';
import Section2 from '../Section2';

export default function Home() {
  return (
      <section>
        <Navbar />
        <Heros/> 
        <About />
        <Section1 />
        <Section2 />
        <Menu />
      </section>
  );
}
