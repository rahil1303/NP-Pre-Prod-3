import React, { useState, useEffect, useCallback } from 'react';
import './AchievementSlideshow.css';
import '../../styles/slideshow.css'; // Ensure common CSS is imported
import agbiPoster from '../../assets/agbi2.png';
import preciselyStellarPerformer from '../../assets/preciselyStellarPerformer.png';
import preciselyLifeforceAward from '../../assets/preciselyLifeforceAward.png';
import preciselySpotAward from '../../assets/preciselySpotAward.png';
import preciselySpotAward2 from '../../assets/preciselySpotAward2.png';
import ibmHackathon from '../../assets/ibmHackathon.png';
import youthZestContest from '../../assets/youthZestContest.png';
import techBharatHackathon from '../../assets/techBharatHackathon.png';
import verzeoOutstandingPerformer from '../../assets/verzeoOutstandingPerformer.jpg';
import agbiHealthTech from '../../assets/agbiHealthTech.png';
import communiqueSeminar from '../../assets/communiqueSeminar.png';
import frenchOlympiad from '../../assets/frenchOlympiad.png';

const images = [
    agbiPoster,
    preciselyStellarPerformer,
    preciselyLifeforceAward,
    preciselySpotAward,
    ibmHackathon,
    youthZestContest,
    techBharatHackathon,
    verzeoOutstandingPerformer,
    agbiHealthTech,
    communiqueSeminar,
    preciselySpotAward2,
    frenchOlympiad,
];

const AchievementSlideshow = () => {
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
                    alt="Achievement"
                    className={`slide-image ${currentIndex === 0 ? 'zoom-out' : ''}`} // Assuming agbiHealthTech is at index 7
                />
            </div>
            <button className="next" onClick={handleNext}>&#10095;</button>
        </div>
    );
};

export default AchievementSlideshow;
