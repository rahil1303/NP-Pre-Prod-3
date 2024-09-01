import React, { useEffect } from 'react';
import './IntroAnimations.css';

const IntroAnimation = () => {
    useEffect(() => {
        const texts = ["Innovator", "Data Scientist", "Cloud Architect", "AI Specialist", "Tech Enthusiast", 
        "Full Stack Developer", "Machine Learning Engineer", "Cybersecurity Analyst", 
        "DevOps Engineer", "System Designer", "Tech Consultant", "API Developer", 
        "Database Administrator", "Backend Developer", "Frontend Developer", 
        "Digital Transformation Leader", "Tech Strategist", "Software Architect", 
        "Quality Assurance Engineer", "Tech Mentor", "Open Source Contributor", 
        "Mobile App Developer", "UX/UI Designer", "Blockchain Developer", 
        "Data Analyst", "Tech Blogger", "Project Manager", "Cloud Engineer", 
        "System Integrator", "IT Specialist", "Tech Evangelist", "Cloud Solutions Architect", 
        "Data Warehouse Engineer", "Big Data Analyst", "IoT Developer", "Tech Visionary", 
        "SaaS Developer", "AI Researcher", "Robotics Engineer", "Cloud Security Specialist", 
        "Enterprise Architect", "Solution Architect", "Technical Lead", 
        "Software Tester", "Innovation Manager", "Tech Entrepreneur", "Tech Consultant", 
        "Web Developer", "Tech Innovator", "Data Engineer"];
       
        let currentTextIndex = 0;
        const dynamicTextElement = document.getElementById("dynamic-text");

        function changeText() {
            dynamicTextElement.innerHTML = texts[currentTextIndex];
            dynamicTextElement.style.opacity = 1;
            setTimeout(() => {
                dynamicTextElement.style.opacity = 0;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(changeText, 500); // wait for fade out
            }, 2000); // time to show each text
        }

        setTimeout(changeText, 2000); // start after initial fade-in

    }, []);

    return (
        <div className="intro-animation">
            <div className="intro-text">
                <h1 className="fade-in">Hello, I'm Rahil</h1>
                <h2 id="dynamic-text" className="fade-in-delay">R&D Enthusiast</h2>
            </div>
            <div className="typewriter">
                <h1 id="description"></h1>
            </div>
        </div>
    );
}

export default IntroAnimation;
