// src/pages/Skills/SkillsPage.jsx
import React from 'react';
import {
    FaCode,
    FaStream,
    FaDatabase,
    FaCloud,
    FaRobot,
    FaProjectDiagram,
    FaShieldAlt,
    FaLock,
    FaHandshake
} from 'react-icons/fa';
import SkillCategory from '../../components/SkillCategory/SkillCategory';
import './SkillsPage.css';

const skills = [
    {
        category: 'Programming & Backend',
        icon: <FaCode />,
        skills: [
            'Python', 'SQL', 'Java', 'TypeScript', 'JavaScript', 'Bash',
            'FastAPI', 'REST APIs', 'gRPC', 'React', 'OOP & Design Patterns'
        ],
    },
    {
        category: 'Data Engineering & Integration',
        icon: <FaStream />,
        skills: [
            'ETL / ELT', 'Change Data Capture (CDC)', 'Batch & Stream Processing',
            'Apache Kafka', 'Apache Spark / PySpark', 'Apache Airflow', 'dbt',
            'Data Pipelines', 'API & Platform Integration'
        ],
    },
    {
        category: 'Data Platforms & Databases',
        icon: <FaDatabase />,
        skills: [
            'Snowflake', 'Databricks', 'Delta Lake', 'PostgreSQL', 'SQL Server',
            'Oracle', 'Db2', 'DuckDB', 'Data Warehousing', 'Dimensional Modelling',
            'Query & Performance Tuning'
        ],
    },
    {
        category: 'Cloud & Infrastructure',
        icon: <FaCloud />,
        skills: [
            'AWS (EC2, S3, RDS, VPC, IAM, Lambda, CloudWatch)',
            'Azure (Data Factory, Synapse, Key Vault)', 'Google Cloud Platform',
            'Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Linux',
            'Cloud Migration', 'High Availability & Scalability'
        ],
    },
    {
        category: 'LLMs & Agentic AI',
        icon: <FaRobot />,
        skills: [
            'RAG', 'Vector & Hybrid Search', 'Reranking', 'AI Agents', 'Tool Calling',
            'MCP', 'LangChain', 'LangGraph', 'Multi-Model Orchestration',
            'LLM Evaluation & Eval Harnesses', 'Groq / Gemini / Ollama'
        ],
    },
    {
        category: 'Machine Learning & Data Science',
        icon: <FaProjectDiagram />,
        skills: [
            'scikit-learn', 'XGBoost', 'LightGBM', 'PyTorch', 'TensorFlow',
            'Transformers (Hugging Face)', 'Feature Engineering', 'Anomaly Detection',
            'SHAP & Explainable AI', 'Pandas', 'NumPy', 'Statistical Analysis'
        ],
    },
    {
        category: 'Reliability, Data Quality & DevOps',
        icon: <FaShieldAlt />,
        skills: [
            'Incident Management', 'Root-Cause Analysis', 'Monitoring & Observability',
            'Data Quality Testing', 'Schema Validation', 'Data Lineage',
            'CI/CD', 'GitHub Actions', 'Azure DevOps', 'Git',
            'Automated & Integration Testing'
        ],
    },
    {
        category: 'Security, Privacy & Performance',
        icon: <FaLock />,
        skills: [
            'Privacy-Preserving Systems', 'Cryptographic Protocols',
            'GDPR & Data Minimisation', 'Cloud Security', 'Performance Benchmarking',
            'JVM & Garbage Collection Tuning', 'Energy Profiling', 'Experimental Design'
        ],
    },
    {
        category: 'Consulting & Collaboration',
        icon: <FaHandshake />,
        skills: [
            'Requirements Gathering', 'Customer Onboarding', 'Stakeholder Communication',
            'Architecture Reviews', 'Financial Reconciliation', 'Technical Writing',
            'Teaching & Mentoring', 'Agile Workflow'
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
