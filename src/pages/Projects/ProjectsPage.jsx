import React from 'react';
import './ProjectsPage.css';

const projects = [
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
