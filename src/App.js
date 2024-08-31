import React from 'react';
import Navbar from './components/Navbar';
import WelcomeBanner from './components/WelcomeBanner';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ContactMe from './components/ContactMe';
import './index.css'; // Global CSS
const App = () => (
  <div className="App">
    <Navbar />
    <WelcomeBanner />
    <div className="main-content-wrapper">
      <div className="side-images">
        <img src="40 Innovative Dancing women Drawings and sketches ideas.jpeg" alt="Circular " className="circular" />
        <img src="download (1).jpeg" alt="Star Image" className="star" />
        <img src="download.jpeg" alt="Star Image" className="star" />
      </div>
      <div className="wrapper">
        <img src="kavya4.jpg" alt="img" />
        <About />
      </div>
      <div className="side-images">
        <img src="download (2).jpeg" alt="Circular Image" className="circular" />
        <img src="Dancer's feet.jpeg" alt="Star Image" className="star" />
        <img src="Bharatanatyam Dance Art _ Dance Wall Art _ Ballerina Wall Art _ Indian Art _Classical Dance Girl _ Indian Traditional Canvas Art Print _Gift.jpeg" alt="Star Image" className="star" />
      </div>
    </div>
    <Gallery />
    <Contact />
    <ContactMe />

            </div>
  
);

export default App;
