// src/components/AboutSlideshow/AboutSlideshow.jsx
import React, { useState, useEffect } from 'react';
import precisely1 from '../../assets/Precisely1.jpg';
import precisely2 from '../../assets/Precisely2.jpg';
import precisely3 from '../../assets/Precisely3.jpg';
import precisely4 from '../../assets/Precisely4.png';
import './AboutSlideshow.css'; // Make sure this line imports the correct CSS file

const images = [
    precisely1,
    precisely2,
    precisely3,
    precisely4,
];

const AboutSlideshow = () => {
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

export default AboutSlideshow;
