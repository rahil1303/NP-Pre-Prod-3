import React, { useEffect } from 'react';
import './IntroAnimations.css';

const IntroAnimation = () => {
    useEffect(() => {
        const texts = ["Data Engineer", "Software Engineer", "AI Software Engineer",
        "Cloud Engineer", "Integration Engineer", "Analytics Engineer",
        "Backend Developer", "Systems Researcher", "Tech Consultant",
        "Teaching Assistant", "Tech Blogger", "Problem Solver"];
       
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
                <h1 id="description" aria-label="Description"> </h1>
            </div>
        </div>
    );
}

export default IntroAnimation;
