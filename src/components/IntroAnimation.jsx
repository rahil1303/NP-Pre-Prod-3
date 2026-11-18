import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './IntroAnimations.css';

const IntroAnimation = () => {
    useEffect(() => {
        const texts = ["AI Engineer", "Technical Consultant", "Data Engineer",
        "LLM & RAG Builder", "Data Integration Specialist", "Python Backend Developer",
        "Analytics Engineer", "Cloud & Data Platforms", "Systems Thinker"];
       
        let currentTextIndex = 0;
        const dynamicTextElement = document.getElementById("dynamic-text");

        let cancelled = false;
        function changeText() {
            if (cancelled || !dynamicTextElement) return;
            dynamicTextElement.innerHTML = texts[currentTextIndex];
            dynamicTextElement.style.opacity = 1;
            setTimeout(() => {
                dynamicTextElement.style.opacity = 0;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(changeText, 500); // wait for fade out
            }, 2000); // time to show each text
        }

        setTimeout(changeText, 2000); // start after initial fade-in

        return () => { cancelled = true; };
    }, []);

    return (
        <div className="intro-animation">
            <div className="intro-text">
                <h1 className="fade-in">Hello, I'm Rahil</h1>
                <h2 id="dynamic-text" className="fade-in-delay">AI Engineer</h2>
                <p className="intro-tagline fade-in">
                    AI Engineer · Technical Consultant · Data Engineer
                </p>
                <p className="intro-sub fade-in">
                    I build LLM applications, data pipelines and integrations that hold up in production,
                    and I translate between business teams and engineers. Based in Amsterdam, available immediately.
                </p>
                <div className="intro-cta fade-in">
                    <Link to="/projects" className="intro-btn primary">&#9654;&nbsp; View Projects</Link>
                    <Link to="/resume" className="intro-btn secondary">Download CV</Link>
                </div>
            </div>
            <div className="typewriter">
                <h1 id="description" aria-label="Description"> </h1>
            </div>
        </div>
    );
}

export default IntroAnimation;
