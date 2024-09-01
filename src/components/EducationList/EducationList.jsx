// src/components/EducationList/EducationList.jsx
import React from 'react';
import './EducationList.css';
import EducationItem from '../EducationItem/EducationItem';
import UOA from '../../assets/UOA1.jpg';
import VU from '../../assets/VU3.jpeg';
import IIIT from '../../assets/IIITB1.jpg';
import Sym from '../../assets/Symb1.jpg';

const educations = [
    {
        image: UOA,
        college: "University of Amsterdam",
        degree: "Masters in Computer Science (Joint Degree Program)",
        years: "2024-2026",
        areas: "Big Data Engineering, Machine Learning, AI",
        grade: "On-Going"
    },
    {
        image: VU,
        college: "Vrije University Amsterdam",
        degree: "Masters in Computer Science (Joint Degree Program)",
        years: "2024-2026",
        areas: "Big Data Engineering, Machine Learning, AI",
        grade: "On-Going"
    },
    {
        image: IIIT,
        college: "IIIT Bangalore",
        degree: "Postgraduate Program in Software Development",
        years: "2022-2024",
        areas: "Software Engineering, Data Structures, Algorithms",
        grade: "3.5 CGPA"
    },
    {
        image: Sym,
        college: "Symbiosis International University",
        degree: "Bachelor of Technology in Electronic and Tele-Communication",
        years: "2018-2022",
        areas: "Electronic System, Deep Learning, Communication Technologies",
        grade: "7.4 CGPA"
    }
];

const EducationList = () => {
    return (
        <div className="education-list">
            <h2 style={{ textAlign: 'left' }}>My Educational Journey</h2>
            <div className="education-items">
                {educations.map((edu, index) => (
                    <EducationItem key={index} education={edu} />
                ))}
            </div>
        </div>
    );
};

export default EducationList;
