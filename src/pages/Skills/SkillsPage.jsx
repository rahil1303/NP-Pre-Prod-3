// src/pages/Skills/SkillsPage.jsx
import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaToolbox, FaProjectDiagram, FaTasks, FaBook } from 'react-icons/fa';
import SkillCategory from '../../components/SkillCategory/SkillCategory';
import './SkillsPage.css';

const skills = [
    {
        category: 'Programming',
        icon: <FaCode />,
        skills: ['JavaScript', 'NodeJS', 'Java', 'Python', 'MATLAB', 'SQL', 'R programming'],
    },
    {
        category: 'Data Science',
        icon: <FaDatabase />,
        skills: ['Pandas', 'Confluent Kafka', 'NumPy', 'Matplotlib', 'BeautifulSoup', 'Seaborn'],
    },
    {
        category: 'Machine Learning Libraries',
        icon: <FaProjectDiagram />,
        skills: ['SciPy', 'PyTorch', 'Theano', 'Keras', 'Scikit-Learn', 'TensorFlow', 'NLTK', 'OpenCV'],
    },
    {
        category: 'Cloud Technologies',
        icon: <FaCloud />,
        skills: ['Snowflake', 'Microsoft Azure', 'AWS Lambda', 'Databricks', 'IBM Watson Cloud', 'Kafka', 'Google Cloud'],
    },
    {
        category: 'Frameworks and APIs',
        icon: <FaToolbox />,
        skills: ['Material UI', 'Django', 'Bootstrap', 'Stitch', 'Docker', 'Avro Schema Registry'],
    },
    {
        category: 'Other Skills',
        icon: <FaTasks />,
        skills: ['Git', 'GitHub', 'GitLab', 'BitBucket', 'Waterfall', 'Agile', 'Communication', 'Organization Management', 'Research & Exploration', 'Information Management'],
    },
    {
        category: 'Relevant Knowledge',
        icon: <FaBook />,
        skills: ['Statistics', 'Calculus', 'Probability', 'Database Management'],
    },
];

const SkillsPage = () => {
    return (
        <div className="skills-page">
            <h1 className="page-title">My Skills</h1>
            <div className="skills-grid">
                {skills.map((skillCategory, index) => (
                    <SkillCategory
                        key={index}
                        category={skillCategory.category}
                        icon={skillCategory.icon}
                        skills={skillCategory.skills}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
