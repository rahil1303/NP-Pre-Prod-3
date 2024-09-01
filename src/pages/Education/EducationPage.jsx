// src/pages/Education/EducationPage.jsx
import React from 'react';
import EducationSlideshow from '../../components/EducationSlideshow/EducationSlideshow';
import EducationList from '../../components/EducationList/EducationList';

const EducationPage = () => {
    return (
        <div>
            <EducationSlideshow />
            <EducationList />
        </div>
    );
};

export default EducationPage;
