// src/components/AchievementItem/AchievementItem.jsx
import React from 'react';

const AchievementItem = ({ achievement }) => {
    return (
        <div className="achievement-item">
            <img src={achievement.image} alt={achievement.title} />
            <div className="achievement-details">
                <h3>{achievement.title}</h3>
                <p><strong>{achievement.date}</strong></p>
                <p>{achievement.description}</p>
                <ul className="details-list">
                    {achievement.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AchievementItem;
