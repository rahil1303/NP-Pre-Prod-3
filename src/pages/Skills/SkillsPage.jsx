// src/pages/Skills/SkillsPage.jsx
import React from 'react';
import { 
    FaCode, 
    FaDatabase, 
    FaCloud, 
    FaToolbox, 
    FaProjectDiagram, 
    FaTasks, 
    FaBook, 
    FaLock 
} from 'react-icons/fa';
import SkillCategory from '../../components/SkillCategory/SkillCategory';
import './SkillsPage.css';

const skills = [
    {
        category: 'Programming & Scripting',
        icon: <FaCode />,
        skills: [
            'Python', 'Java', 'JavaScript', 'Node.js', 'SQL', 
            'MATLAB', 'R', 'Bash / Shell Scripting'
        ],
    },
    {
        category: 'Data Science & Analytics',
        icon: <FaDatabase />,
        skills: [
            'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'BeautifulSoup',
            'Scikit-Learn', 'XGBoost', 'LightGBM', 'Plotly'
        ],
    },
    {
        category: 'Machine Learning & AI',
        icon: <FaProjectDiagram />,
        skills: [
            'TensorFlow', 'PyTorch', 'Keras', 'Transformers (Hugging Face)',
            'LSTM / CNN', 'Explainable AI (XAI)', 'NLTK', 'OpenCV'
        ],
    },
    {
        category: 'Cloud & Big Data Technologies',
        icon: <FaCloud />,
        skills: [
            'Snowflake', 'Databricks', 'Google Cloud Platform (GCP)', 
            'Microsoft Azure', 'AWS', 'Confluent Kafka', 
            'Docker', 'GitHub Actions'
        ],
    },
    {
        category: 'Frameworks & APIs',
        icon: <FaToolbox />,
        skills: [
            'Django', 'Flask', 'Streamlit', 'Material UI', 'Bootstrap', 
            'Avro Schema Registry', 'Docker Compose'
        ],
    },
    {
        category: 'Security & Research Tools',
        icon: <FaLock />,
        skills: [
            'gRPC / Protocol Buffers', 'Cryptographic Protocols', 
            'Oblivious Sort / Bloom Filter Design', 
            'Experimental Design (RCBD)', 'Energy Profiling'
        ],
    },
    {
        category: 'Professional & Teaching Skills',
        icon: <FaTasks />,
        skills: [
            'Teaching Assistance', 'Research Communication', 
            'Version Control (Git, GitHub, GitLab)', 
            'Agile Workflow', 'Technical Writing', 'Organization Management'
        ],
    },
    {
        category: 'Theoretical & Mathematical Foundations',
        icon: <FaBook />,
        skills: [
            'Statistics', 'Probability', 'Calculus', 
            'Linear Algebra', 'Optimization', 'Database Systems'
        ],
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
