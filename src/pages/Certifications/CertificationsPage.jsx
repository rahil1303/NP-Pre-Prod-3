// src/pages/Certifications/CertificationsPage.jsx
import React from 'react';
import CertificationsSlideshow from '../../components/CertificationsSlideshow/CertificationsSlideshow';
import Certifications from '../../components/CertificationsList/CertificationsList';
import './CertificationsPage.css';

const CertificationsPage = () => {
    return (
        <div className="certifications-page">
            <CertificationsSlideshow />
            <h1 style={{ textAlign: 'left', padding: '20px' }}>Certifications</h1>
            <Certifications />
        </div>
    );
};

export default CertificationsPage;
