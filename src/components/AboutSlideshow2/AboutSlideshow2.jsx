import React, { useState, useEffect } from 'react';
import './AboutSlideshow2.css';
import Microsoft1 from '../../assets/Microsoft1.jpg';
import Microsoft2 from '../../assets/Microsoft3.jpeg';
import Einstein1 from '../../assets/Einstein1.jpg';
import TomCruise1 from '../../assets/TomCruise1.jpeg';
import SRK1 from '../../assets/SRK1.jpg';

const images = [
    Microsoft1,
    Microsoft2,
    Einstein1,
    TomCruise1,
    SRK1,
];

const AboutSlideshow2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 8000); // Change every 8 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="slideshow">
            <img src={images[currentIndex]} alt="Slide" className="slide-image" />
        </div>
    );
};

export default AboutSlideshow2;
