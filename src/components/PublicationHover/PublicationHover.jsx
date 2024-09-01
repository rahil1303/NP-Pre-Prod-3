// src/components/PublicationHover/PublicationHover.jsx
import React, { useState, useCallback } from 'react';
import './PublicationHover.css';
import SummaryPopup from './SummaryPopup';

const PublicationHover = ({ publication }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = useCallback(() => {
        setShowPopup(true);
    }, []);

    const handleClosePopup = useCallback(() => {
        setShowPopup(false);
    }, []);

    return (
        <div className="publication-hover">
            <div className="publication-hover-details">
                <h3>{publication.title}</h3>
                <p>{publication.description}</p>
                <div className="buttons">
                    <a href={publication.paperLink} target="_blank" rel="noopener noreferrer">Read Paper</a>
                    <button onClick={handleShowPopup}>Read Summary</button>
                </div>
            </div>
            {showPopup && <SummaryPopup publication={publication} onClose={handleClosePopup} />}
        </div>
    );
};

export default PublicationHover;
