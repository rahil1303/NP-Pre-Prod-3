import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import IntroAnimation from '../../components/IntroAnimation';
import SiteImage1 from '../../assets/SiteImage1.jpg';
import SiteImage2 from '../../assets/SiteImage2.GIF';
import SiteImage3 from '../../assets/SiteImage3.GIF';

const images = [SiteImage1, SiteImage2, SiteImage3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 25000); // Change image every 25 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="intro-section">
        <IntroAnimation />
        <div className="scroll-down">
          <a href="#home-about-section">Scroll Down</a>
        </div>
      </div>
      <div id="home-about-section" className="home-about-section">
        <div className="home-about-content">
          <div className="home-about-images">
            <img src={images[currentImageIndex]} alt={`Description ${currentImageIndex + 1}`} />
          </div>
          <div className="home-about-description">
            <h2>About This Site</h2>
            <ul>
              <li>Hello Guys! My name is Rahil Sharma, a master's student immersed in the realms of Computer Science, with a specialization in Big Data Engineering. I am part of a unique joint degree program between VU Amsterdam and the University of Amsterdam. With three years of work experience in a multinational company, I have thrived in diverse environments and honed my ability to collaborate effectively within global teams.</li>
              <li>This portfolio, which some might simply call a website, is my canvas to showcase not just my technical skills, but also my dedication, determination, creativity, and ingenuity. The choice of a Netflix-inspired theme is deliberate – I admire its distinctive and challenging UI, which captivates users with its seamless design and functionality.</li>
              <li>I see myself as a perpetual learner, always eager to dive into the vast ocean of technology. Much like a falcon, known for its incredible adaptability, fierce competitiveness, and strength, I can soar at different altitudes, adjusting to the ever-changing environment and demands. My aim is to be a versatile 'jack of all trades' – a wild card who can adapt and excel in any technical challenge thrown my way.</li>
              <li>Through this platform, I invite you to explore my journey, projects, and the unwavering passion that drives me to push the boundaries of what's possible in the tech world.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
