import React, { useState, useCallback, useEffect } from 'react';
import './PublicationSlideshow.css';
import publication1 from '../../assets/publication1.png';
import publication2 from '../../assets/publication2.png';
import publication3 from '../../assets/publication3.png';
import publication4 from '../../assets/publication4.png';
import publication5 from '../../assets/publication5.png';
import publication6 from '../../assets/publication6.png';
import rsSigdsa from '../../assets/rs_sigdsa.jpg';
import rsGreens from '../../assets/rs_greens.jpg';
import rsEase from '../../assets/rs_ease.jpg';
import rsTeaching from '../../assets/rs_teaching.jpg';
import '../../styles/slideshow.css'; // Ensure common CSS is imported


const publications = [
    { image: rsSigdsa, title: "Paper: Toward Auditable Fraud Detection (Pre-ICIS SIGDSA 2026, accepted)" },
    { image: rsGreens, title: "Paper: Do Garbage-Collector Energy Rankings Generalize? (GREENS 2027 @ ICSE, submitted)" },
    { image: rsEase, title: "Paper: The Marginal Value of Explicit Garbage Collection (under review)" },
    { image: publication6, title: "MSc Thesis: OBFI at CWI Amsterdam" },
    { image: rsTeaching, title: "Teaching: Senior Teaching Assistant, VU Amsterdam & University of Twente" },
    { image: publication1, title: "Publication: A Novel Approach towards Healthcare using Identity Access Management and Machine Learning" },
    { image: publication2, title: "Publication: Applications of Disease Detection using Digital Image Processing Techniques" },
    { image: publication3, title: "Conference: Harvard Project for Asian and International Relations (HPAIR)" },
    { image: publication4, title: "Community Work: Website Developer Intern (Amanat Foundation)" },
    { image: publication5, title: "Conference: Communique International Telecom Seminar" }
];

const PublicationSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((currentIndex + 1) % publications.length);
    }, [currentIndex]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((currentIndex - 1 + publications.length) % publications.length);
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(handleNext, 8000); // Change every 15 seconds
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [handleNext]);

    return (
        <div className="slideshow">
            <button className="prev" onClick={handlePrev}>&#10094;</button>
            <div className="slide">
                <img src={publications[currentIndex].image} alt="Publication" className="slide-image" />
                <div className="publication-details">
                    <h3>{publications[currentIndex].title}</h3>
                    <div className="buttons">
                    </div>
                </div>
            </div>
            <button className="next" onClick={handleNext}>&#10095;</button>
        </div>
    );
};

export default PublicationSlideshow;
