// src/components/EducationItem/EducationItem.jsx
import React from 'react';
import './EducationItem.css';

const EducationItem = ({ education }) => {
    return (
        <div className="education-item">
            <img src={education.image} alt="Education" />
            <div className="education-details">
                <h3>{education.college}</h3>
                <p>Degree: {education.degree}</p>
                <p>Years Attended: {education.years}</p>
                <p>Core Areas: {education.areas}</p>
                <p>Grade Achieved: {education.grade}</p>
            </div>
        </div>
    );
};

export default EducationItem;
