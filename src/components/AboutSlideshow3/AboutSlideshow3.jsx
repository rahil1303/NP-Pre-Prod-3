import React, { useState, useEffect } from 'react';
import './AboutSlideshow3.css';
import Vhaegar1 from '../../assets/Vhaegar1.GIF';
import TC6 from '../../assets/TC6.GIF';
import TS1 from '../../assets/TS1.GIF';
import HS from '../../assets/HS.GIF';
import TC2 from '../../assets/TC2.GIF';
import Aemond2 from '../../assets/Aemond2.GIF';
import TC3 from '../../assets/TC3.GIF';
import TC4 from '../../assets/TC4.GIF';
import TS2 from '../../assets/TS2.GIF';
import Loki2 from '../../assets/Loki2.GIF';
import TC5 from '../../assets/TC5.GIF';

const images = [
    Vhaegar1,
    TC6,
    TS1,
    HS,
    TC2,
    Aemond2,
    TC3,
    TC4,
    TS2,
    Loki2,
    TC5,
];

const AboutSlideshow3 = () => {
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

export default AboutSlideshow3;
