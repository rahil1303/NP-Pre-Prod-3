// src/components/PublicationHover/SummaryPopup.jsx
import React, { useCallback } from 'react';
import './SummaryPopup.css';

const SummaryPopup = ({ publication, onClose }) => {
    const stopPropagation = useCallback((e) => {
        e.stopPropagation();
    }, []);

    return (
        <div className="summary-popup-overlay" onClick={onClose}>
            <div className="summary-popup" onClick={stopPropagation}>
                <img src={publication.image} alt={publication.title} className="summary-popup-image" />
                <h2>{publication.title}</h2>
                <p>{publication.summary}</p>
                <p><strong>Publication:</strong> {publication.publication}</p>
                <p><strong>Research Peers:</strong> {publication.researchPeers}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SummaryPopup;
