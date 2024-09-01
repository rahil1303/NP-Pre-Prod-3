import React, { useState, useEffect, useCallback } from 'react';
import './EducationSlideshow.css';
import uoaImage1 from '../../assets/UOA1.jpg';
import uoaImage3 from '../../assets/UOA3.jpg';
import uoaImage4 from '../../assets/UOA4.jpg';
import uoaImage5 from '../../assets/UOA5.jpg';
import vuImage1 from '../../assets/VU1.png';
import vuImage2 from '../../assets/VU2.jpg';
import vuImage3 from '../../assets/VU3.jpeg';
import iiitImage from '../../assets/IIITB1.jpg';
import symImage1 from '../../assets/Symb1.jpg';
import symImage2 from '../../assets/Symb2.jpg';
import '../../styles/slideshow.css'; // Ensure common CSS is imported




const images = [
    uoaImage1,
    uoaImage4,
    uoaImage3,
    uoaImage5,
    vuImage1,
    vuImage2,
    vuImage3,
    iiitImage,
    symImage1,
    symImage2
];

const EducationSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
    }, [currentIndex]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 8000); // Change every 8 seconds
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div className="slideshow">
            <button className="prev" onClick={handlePrev}>&#10094;</button>
            <div className="slide">
                <img
                    src={images[currentIndex]}
                    alt="Educational Institution"
                    className="slide-image"
                />
            </div>
            <button className="next" onClick={handleNext}>&#10095;</button>
        </div>
    );
};

export default EducationSlideshow;
