
// src/components/CertificationItem/CertificationItem.jsx
import React from 'react';
import './CertificationItem.css';

const CertificationItem = ({ image, title, description, date }) => {
  return (
    <div className="certification-item">
      <img src={image} alt={title} className="certification-image" />
      <div className="certification-details">
        <h3 className="certification-title">{title}</h3>
        <p className="certification-description">{description}</p>
        <p className="certification-date">{date}</p>
      </div>
    </div>
  );
};

export default CertificationItem;
