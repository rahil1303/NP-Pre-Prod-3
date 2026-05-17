import React from 'react';
import './ProjectsPage.css';

const projects = [
    {
    name: 'OBFI: Implementation, Empirical Analysis, and Crossover Characterization',
    techStack: 'Python, gRPC, Cryptography, Encryption, Persistence',
    description: 'Built a distributed client–server system in Python (gRPC, encryption, persistence) to implement and compare two cryptographic protocols for Oblivious Bloom Filter Insertion. Translated formal theoretical protocol specifications into executable systems, resolving ambiguities in prior research. Designed and ran experiments across varying batch sizes and filter capacities to evaluate real-world system behavior. Developed a decision framework for selecting between protocols based on deployment parameters and observed performance trends.',
    demo: 'https://github.com/rahil1303/obfi-implementation-analysis.git'
    },
    {
    name: 'Adaptive AI Interaction & Reasoning Platform',
    techStack: 'Python, LLaMA, Qwen, GPT, Groq, RAG, Vector Search',
    description: 'Built a full-stack RAG application supporting multi-model comparison across LLaMA, Qwen, GPT, and Groq-hosted models. Designed semantic chunking and vector retrieval pipelines with configurable similarity metrics and ranked context inspection. Developed multi-round critique and evaluation pipelines to analyze answer quality, reasoning consistency, and model behavior. Includes contextual highlighting, automated insight generation, side-by-side response comparison, and exportable evaluation logs.',
    demo: 'https://github.com/rahil1303/adaptive-llm-reasoning-platform.git'
    },
    {
    name: 'Reactivity–Reflectivity Vector Framework (RRVF)',
    techStack: 'Python, NLP, YouTube API, Transformers',
    description: 'Developed a framework to analyze political polarization beyond traditional left–right labels using measurable behavioral signals. Collected and processed large-scale YouTube transcript and comment data across major political events. Translated abstract concepts like framing, engagement, and reflectiveness into quantifiable features using NLP techniques, integrating theory-driven insights with practical analysis pipelines.',
    demo: 'https://github.com/rahil1303/Social_Web_Project_Work.git'
    },
    {
    name: 'Energy–Performance Trade-offs of Java GC Strategies',
    techStack: 'Java, Python, EnergiBridge, Intel RAPL',
    description: 'Empirical study conducted at VU Amsterdam analyzing the energy–performance trade-offs of Java Garbage Collection strategies (Serial, Parallel, G1) across 324 randomized RCBD runs. Automated data collection and analysis using ExperimentRunner, ANOVA, and Tukey HSD tests for statistical validation.',
    demo: 'https://github.com/rahil1303/Green-Lab-Course-Work-Group-5'
    },
    {
    name: 'PACSHAP–FeatureGraph (Privacy-Preserving Feature Selection)',
    techStack: 'Python, SHAP, Autoencoders, Knowledge Graphs',
    description: 'Developed a privacy-preserving feature selection framework integrating PAC-privacy guarantees with explainable AI via SHAP values and Knowledge Graph reasoning. Demonstrated improved interpretability and privacy–accuracy trade-offs compared to traditional feature selection methods.',
    demo: 'https://github.com/rahil1303/PACSHAP-FeatureGraph'
    },
    {
    name: 'Smartphone Activity Classification System',
    techStack: 'Python, SciKit-Learn, LSTM, Sensor Fusion',
    description: 'Built an activity recognition system using smartphone and smartwatch sensor data (accelerometer, gyroscope, heart rate) to classify physical activities. Engineered time–frequency domain features and compared ML models (Random Forest, SVM, KNN, LSTM) achieving R² = 0.71.',
    demo: 'https://drive.google.com/file/d/16ysb-zkIarldtzvLlAyKsdYi9UgqWaQ4/view?usp=sharing'
    },
    {
    name: 'Fact-Checking Pipeline using NLP and Knowledge Graphs',
    techStack: 'Python, NLTK, Transformers, Wikidata API, DBpedia API',
    description: 'Designed a hybrid AI-based fact verification pipeline combining deep learning-based textual entailment with multi-source entity validation using Wikidata and DBpedia. Incorporated explainable AI techniques to visualize evidence-based reasoning.',
    demo: 'https://drive.google.com/file/d/1xaqfK_VsEtN5wWcU20s6ae-f67DFGxm7/view?usp=sharing'
    },
    
    {
        name: 'Medicus The Smart Care Assistant for Healthcare',
        techStack: 'IBM Watson, Python, Django',
        description: 'Developed a predictive chatbot-enabled digital assistant for surgeons, patients, and care teams, automating tasks such as decision making, post-surgery planning, tracking, and estimating recovery time. This project won an award at the AGBI Hackathon organized by the Great Lakes Institute of Management and sponsored by NITI Aayog and Mehta’s Group of Hospitals.',
        demo: 'https://github.com/rahil1303/Project-AR-Medicus/tree/main'
    },
    {
        name: 'CostCloud: An AI-Enhanced Cloud Resource Analysis and Cost Comparison Framework',
        techStack: 'Python, Java, Django, TensorFlow, Scikit-learn',
        description: 'Built a system using Python and Java to analyze cloud resources and compare costs using AI. This project is in development.',
        demo: 'https://github.com/rahil1303/CostCloudAI'
    },
    {
        name: 'Applications of Disease Detection using Digital Image Processing Techniques',
        techStack: 'Neural Networks, Machine Learning Algorithms',
        description: 'Published a paper on using digital image processing techniques for disease detection, shortlisted in the Youth Zest Virtual Project Contest organized by the Indian Institute of Project Technology (IIPT).',
        demo: 'https://digitalcommons.unl.edu/libphilprac/5765/'
    },
    {
        name: 'A Novel Approach towards Healthcare using Identity Access Management and Machine Learning',
        techStack: 'Identity Access Management, Machine Learning',
        description: 'Presented a digital healthcare platform leveraging Identity Access Management and Machine Learning, shortlisted for the Techbharat National Level Hackathon.',
        demo: 'https://www.academia.edu/83239179/A_Novel_Approach_towards_Healthcare_using_Identity_Access_Management_and_Machine_Learning?auto_accept_coauthor=true'
    },
    {
        name: 'Yelp-inspired Full Stack web application',
        techStack: 'JavaScript, CSS, React, Java, Postman',
        description: 'Developed a full-stack web application using JavaScript, CSS, React (frontend), and Java (backend), as part of the Capstone Project in the Executive PG Program in Software Development at IIIT Bangalore.',
        demo: 'https://github.com/rahil1303/Yelp-Inspired-Backend-Design-Project'
    },
    {
        name: 'Overspeed Vehicle Detection using Arduino',
        techStack: 'Arduino, GPS, IR sensors',
        description: 'Developed a system using Arduino and GPS to detect and report vehicles driving over speed limits.',
        demo: 'https://www.linkedin.com/in/rahil-sharma-ba5b6718b'
    },
    {
        name: 'Exploring Design Patterns with FSD: Disease Static Monitor',
        techStack: 'Java, Spring Boot',
        description: 'Implemented a project showcasing RESTful API development, Factory and Strategy design patterns, and error handling in Java, for disease count statistics tracking.',
        demo: 'https://github.com/rahil1303/Exploring-Design-Patterns-with-FSD-'
    },
    {
        name: 'Heart Disease Prediction',
        techStack: 'IBM Cloud, Python, NodeJS',
        description: 'Developed a machine learning model to predict heart failure based on patient health data using IBM Cloud, Python, and NodeJS.',
        demo: 'https://github.com/rahil1303/predictive-model-on-watson-ml'
    },
    {
        name: 'Secure Cloud Infrastructure on Microsoft Azure',
        techStack: 'Azure',
        description: 'Created a secure cloud infrastructure using Azure during a 3-month internship at Verzeo, focusing on storage management, scalability, and accessibility.',
        demo: 'https://www.linkedin.com/in/rahil-sharma-ba5b6718b'
    },
    {
        name: 'Pancreatic Tumor, Brain Tumor and Covid-19 Disease Detection',
        techStack: 'Python, TensorFlow, Django',
        description: 'Developed a Python-based image processing model using TensorFlow and Django to diagnose different disease detection models.',
        demo: 'https://github.com/rahil1303/BRAIN_TUMOUR_DETECTION_USING_DEEP_LEARNING/tree/main'
    },
    {
        name: 'CHATBOT for a small scale business',
        techStack: 'IBM Watson, WordPress',
        description: 'Created a website with a deployed chatbot using IBM Watson and WordPress to assist customers of a small-scale florist.',
        demo: 'https://www.credly.com/badges/18675a36-834c-4182-b0e5-fe50f719ca9d/linked_in_profile'
    },
    {
        name: 'Segmentation and Clustering Of a City',
        techStack: 'Python, Foursquare API, Pandas, Matplotlib, Folium',
        description: 'Built a Python project using the Foursquare API to find important venues in a city, such as cuisine-specific restaurants or supermarkets.',
        demo: 'https://github.com/rahil1303/Applied-Data-Science/tree/master'
    },
    {
        name: 'Watch Try On App',
        techStack: 'Vuforia, Unity',
        description: 'Created an Augmented Reality app using Vuforia and Unity for users to try on virtual watches.',
        demo: 'https://www.linkedin.com/in/rahil-sharma-ba5b6718b'
    },
    {
        name: 'Predictions and Analysis of CO2 Emissions of Cars',
        techStack: 'Python, K-neighbors, Regression, Classification',
        description: 'Developed a Python-based machine learning model to predict future CO2 emissions of cars using K-neighbors, Regression, and Classification.',
        demo: 'https://github.com/rahil1303/Prediction-and-Analysis-of-CO2-EMISSIONS-OF-CARS/tree/master'
    },
    {
        name: 'Hotel Management System',
        techStack: 'Netbeans IDE, MySQL',
        description: 'Developed software to automate hotel functionalities, including room booking and management, using Netbeans IDE and MySQL.',
        demo: 'https://github.com/rahil1303/Hotel-Management-System'
    }
];

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <h1 className="page-title">Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2 className="project-name">{project.name}</h2>
                        <p className="project-tech-stack">Tech Stack: {project.techStack}</p>
                        <p className="project-description">{project.description}</p>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-demo">
                            Demo
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
