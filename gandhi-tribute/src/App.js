import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Legacy from './components/Legacy';
import Timeline from './components/Timeline';
import Influence from './components/Influence';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Legacy />
      <Timeline />
      <Influence />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
