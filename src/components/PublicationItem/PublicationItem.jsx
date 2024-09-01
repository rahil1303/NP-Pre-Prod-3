// src/components/PublicationItem/PublicationItem.jsx
import React, { useState, useCallback } from 'react';
import './PublicationItem.css';
import SummaryPopup from '../PublicationHover/SummaryPopup';

const PublicationItem = ({ publication }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = useCallback(() => {
        setShowPopup(true);
    }, []);

    const handleClosePopup = useCallback(() => {
        setShowPopup(false);
    }, []);

    return (
        <div className="publication-item">
            <img src={publication.image} alt={publication.title} />
            <div className="publication-details">
                <h3>{publication.title}</h3>
                <p>{publication.description}</p>
            </div>
            <div className="buttons">
                <a href={publication.paperLink} target="_blank" rel="noopener noreferrer">Sneak Peek</a>
            </div>
            {showPopup && <SummaryPopup publication={publication} onClose={handleClosePopup} />}
        </div>
    );
};

export default PublicationItem;
