// src/pages/Publications/Publications.jsx
import React from 'react';
import PublicationSlideshow from '../../components/PublicationSlideshow/PublicationSlideshow';
import PublicationList from '../../components/PublicationList/PublicationList';
import './Publications.css';

const Publications = () => {
    return (
        <div className="publications-page">
            <h1>Publications</h1>
            <PublicationSlideshow />
            <PublicationList />
        </div>
    );
};

export default Publications;
