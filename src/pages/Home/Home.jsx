import React, { useEffect, useState } from 'react';
import './Home.css';
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
              <li>Hey, I'm Rahil Sharma, an AI engineer, technical consultant and data engineer based in Amsterdam. I recently completed a joint MSc in Computer Science (Big Data Engineering) at VU Amsterdam and the University of Amsterdam, with my thesis at CWI, the Dutch national research institute for mathematics and computer science.</li>
              <li>Most of my career has been spent where data systems meet real customers. At Precisely I spent nearly three years inside enterprise CDC and ETL pipelines for banks, insurers, healthcare and travel companies, resolving 500+ production incidents and cutting replication lag by 25 to 50%. At Actuals, an Amsterdam fintech, I onboarded customers onto financial data integrations and reconciliation workflows. Today I build LLM applications, Python backends and data pipelines where correctness, explainability and privacy actually matter, and I'm just as comfortable in the room with customers working out what they really need.</li>
              <li>I think of myself as a systems person. I like understanding why a system is built the way it is, what it trades off, and where it breaks. That curiosity has taken me into research too: one of my papers was accepted at the Pre-ICIS SIGDSA Symposium 2026, and I teach as a Senior TA at VU Amsterdam. Like a falcon, I adjust my altitude to the problem, but these days I fly in three clear lanes: AI engineering, technical consulting and data engineering.</li>
              <li>Why Netflix? Because I love movies, shows and pop culture, and I admire how Netflix turns a huge catalogue into something you actually want to browse. So treat this site like one: every page is a title. Start with Projects, check Research and Community for the papers and teaching, or open my Resume. I hold a Dutch Orientation Year permit and I'm available immediately.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
