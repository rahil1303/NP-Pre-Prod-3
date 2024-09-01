import React, { useRef } from 'react';
import AboutSlideshow from '../../components/AboutSlideshow/AboutSlideshow';
import AboutSlideshow2 from '../../components/AboutSlideshow2/AboutSlideshow2';
import AboutSlideshow3 from '../../components/AboutSlideshow3/AboutSlideshow3';
import './AboutPage.css';

const AboutPage = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const scrollToSection2 = () => {
        section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSection3 = () => {
        section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSection1 = () => {
        section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="about-page">
            <div className="about-section" id="section1" ref={section1Ref}>
                <div className="about-content">
                    <h1 className="about-title">Professional Work Experience</h1>
                    <ul className="experience-list">
                        <li><strong>Career Beginnings and Growth:</strong> Straight out of college, I embarked on my career journey at <strong>Precisely - An American Multi-National Company</strong>, progressing through three positions to become a Software Support Engineer II. My role at Precisely has provided me with extensive experience in the Big Data ecosystem, focusing on enhancing the customer experience on public cloud platforms like Azure, AWS, and GCP.</li>
                        <li><strong>Technical Expertise:</strong> My expertise spans Connect CDC, ETL, Hadoop, Kafka, and Spark, enabling me to support diverse client needs, including database management and mainframe technology software like IBMI AS-400 and Oracle. I have a track record of delivering exceptional service, ensuring high customer satisfaction.</li>
                        <li><strong>Recognition and Awards:</strong> Recognized for my commitment and contributions, I have received several awards, including the Stellar Performer, Joy Giver, Spot Awards, and Round of Applause Award for Outstanding Contributions.</li>
                        <li><strong>Collaboration and Support:</strong> My collaborative approach with development teams and subject matter experts fosters seamless client support and continuous improvement in data processing.</li>
                    </ul>
                </div>
                <AboutSlideshow />
                <button className="scroll-button" onClick={scrollToSection2}>Scroll Down</button>
            </div>
            <div className="about-section alternate" id="section2" ref={section2Ref}>
                <AboutSlideshow2 />
                <div className="about-content">
                    <h1 className="about-title">Career Philosophy and Mindset</h1>
                    <ul className="experience-list">
                        <li><strong>Defining My Career Philosophy:</strong> At my age, articulating a comprehensive career philosophy might seem ambitious, but I have always felt a strong inclination towards being part of something inspiring from its inception. One of the most fulfilling aspects of my previous role was taking on challenging projects, often beyond the typical scope for someone with my experience. Witnessing these projects evolve from ideation and inception to final implementation was incredibly rewarding and has shaped my professional outlook.</li>
                        <li><strong>Embracing Diverse Learning:</strong> I have a natural tendency to explore various domains, always seeking to spice things up, whether in technology or hobbies. This inclination has led me to delve into multiple fields, such as Medical Physics, Cybersecurity, IoT, Frameworks, Service Design, and APIs. I find joy in understanding how my core field of data engineering or software development can be integrated into these diverse areas. This curiosity drives me to continuously learn and experiment, allowing me to contribute more effectively to any team I am part of with a broad and versatile technical skill set.</li>
                        <li><strong>Continuous Growth and Adaptability:</strong> I believe in not limiting myself to a single domain. While I didn’t have to learn Full Stack Development, Cybersecurity, or Data Science, I chose to do so because I wanted to stay connected with various facets of technology. This proactive approach helps me avoid becoming monolithic in my career, ensuring that I remain adaptable and knowledgeable across different fields.</li>
                        <li><strong>Learning from Others:</strong> One of the most enjoyable aspects of my career journey is learning from other fascinating people. Interacting with diverse professionals and understanding their perspectives enriches my knowledge and inspires me to grow continuously.</li>
                    </ul>
                </div>
                <button className="scroll-button" onClick={scrollToSection3}>Scroll Down</button>
            </div>
            <div className="about-section" id="section3" ref={section3Ref}>
                <div className="about-content">
                    <h1 className="about-title">Beyond the Desk</h1>
                    <ul className="experience-list">
                        <li><strong>Passionate About Pop Culture:</strong> I have a deep love for movies, TV shows, and everything related to pop culture. Whether it's the latest blockbuster or a critically acclaimed series, I'm always eager to explore new stories and narratives.</li>
                        <li><strong>Adventurous Spirit:</strong> I love going on adventures and exploring places where few have ventured before. This sense of adventure fuels my curiosity and drives me to seek out new experiences.</li>
                        <li><strong>Team Building and Fun:</strong> I enjoy team-building exercises that combine fun and camaraderie. Activities like gaming, bowling, and laser tag are some of my favorites, as they provide a great way to bond with others and develop teamwork skills.</li>
                        <li><strong>Scuba Diving Enthusiast:</strong> As a certified scuba diver, I relish the opportunity to explore the underwater world. The serenity and beauty of the ocean provide a unique escape and a chance to connect with nature.</li>
                        <li><strong>Future Aspirations:</strong> I'm also looking forward to expanding my skills and experiences by taking driving lessons in the near future. This will not only add to my personal growth but also open up new possibilities for exploration and adventure.</li>
                    </ul>
                </div>
                <AboutSlideshow3 />
                <button className="scroll-button" onClick={scrollToSection1}>Scroll Up</button>
            </div>
        </div>
    );
};

export default AboutPage;
