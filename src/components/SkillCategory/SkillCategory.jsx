// src/components/SkillCategory/SkillCategory.jsx
import React from 'react';
import './SkillCategory.css';

const SkillCategory = ({ category, icon, skills }) => {
    return (
        <div className="skill-category">
            <div className="category-header">
                <span className="category-icon">{icon}</span>
                <h2 className="category-title">{category}</h2>
            </div>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCategory;
