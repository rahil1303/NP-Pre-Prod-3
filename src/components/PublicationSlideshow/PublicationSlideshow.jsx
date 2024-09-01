import React, { useState, useCallback, useEffect } from 'react';
import './PublicationSlideshow.css';
import publication1 from '../../assets/publication1.png';
import publication2 from '../../assets/publication2.png';
import publication3 from '../../assets/publication3.png';
import publication4 from '../../assets/publication4.png';
import publication5 from '../../assets/publication5.png';
import '../../styles/slideshow.css'; // Ensure common CSS is imported


const publications = [
    {
        image: publication1,
        title: "Publication: A Novel Approach towards Healthcare using Identity Access Management and Machine Learning",
        description: "Brief description of publication 1.",
        summary: "This is a brief summary of publication 1.",
        publication: "Journal XYZ",
        researchPeers: "Researcher 1, Researcher 2",
        paperLink: "https://www.academia.edu/83239179/A_Novel_Approach_towards_Healthcare_using_Identity_Access_Management_and_Machine_Learning?auto_accept_coauthor=true",
        summaryLink: "https://link-to-summary-1.com"
    },
    {
        image: publication2,
        title: "Publication: Bibliometric Review on Applications of Disease Detection using Digital Image Processing Techniques",
        description: "Brief description of publication 2.",
        summary: "This is a brief summary of publication 2.",
        publication: "Journal ABC",
        researchPeers: "Researcher 3, Researcher 4",
        paperLink: "https://digitalcommons.unl.edu/libphilprac/5765/",
        summaryLink: "https://link-to-summary-2.com"
    },
    {
        image: publication3,
        title: "Conference: Harvard Project for Asian and International Relations (HPAIR)",
        description: "Brief description of publication 3.",
        summary: "This is a brief summary of publication 3.",
        publication: "Journal DEF",
        researchPeers: "Researcher 5, Researcher 6",
        paperLink: "https://link-to-paper-3.com",
        summaryLink: "https://link-to-summary-3.com"
    },
    {
        image: publication4,
        title: "Community Work: Website Developer Intern (Amanat Foundation UN)",
        description: "Brief description of publication 4.",
        summary: "This is a brief summary of publication 4.",
        publication: "Journal GHI",
        researchPeers: "Researcher 7, Researcher 8",
        paperLink: "https://link-to-paper-4.com",
        summaryLink: "https://link-to-summary-4.com"
    },
    {
        image: publication5,
        title: "Conference: Communique International Telecom Seminar",
        description: "Brief description of publication 5.",
        summary: "This is a brief summary of publication 5.",
        publication: "Journal JKL",
        researchPeers: "Researcher 9, Researcher 10",
        paperLink: "https://link-to-paper-5.com",
        summaryLink: "https://link-to-summary-5.com"
    }
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
