import React from 'react';
import Achievements from '../../components/Achievements/Achievements';
import AchievementSlideshow from '../../components/AchievementSlideshow/AchievementSlideshow';
import './AchievementsPage.css';

const AchievementsPage = () => {
    return (
        <div className="achievements-page">
            <AchievementSlideshow />
            <Achievements />
        </div>
    );
};

export default AchievementsPage;
