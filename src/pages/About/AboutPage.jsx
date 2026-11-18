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
                        <li><strong>Actuals, Technical Consultant, Product Delivery (Sep to Oct 2026, Amsterdam):</strong> At this Amsterdam fintech building transaction reconciliation software, I onboarded customers onto financial data integrations. I configured ledger structures, matching logic and reconciliation workflows, integrated transactional data from PSPs, APIs, SFTP and Snowflake, used SQL to investigate discrepancies, and turned customers' financial requirements into data mappings, validation rules and integration configurations.</li>
                        <li><strong>CWI Amsterdam, Research Assistant, Cryptography Group (Feb 2025 to Jun 2026):</strong> Built distributed Python services over gRPC that turned privacy-preserving cryptographic protocols into testable client-server software, with automated correctness tests and reproducible experiments. Released the pyobfi package on PyPI.</li>
                        <li><strong>Precisely, Software Support Engineer I (Jan to Nov 2022), promoted to Software Support Engineer II (Dec 2022 to Sep 2024), India:</strong> Straight out of college I joined Precisely, an American multinational, and spent nearly three years inside enterprise CDC, ETL and Big Data pipelines (Kafka, HDFS, Snowflake, Azure, AWS, GCP) for banks, insurers, healthcare and travel companies. I resolved 500+ production incidents, cut replication lag by 25 to 50%, improved throughput by 10 to 25%, took customers from proof of concept to go-live, and contributed to an internal AI/LLM support pilot. Recognised with the Stellar Performer, Lifeforce, Spot and Joy Giver awards.</li>
                        <li><strong>VU Amsterdam, Senior Teaching Assistant (2024 to now):</strong> I teach Text Mining for AI, Learning Machines and Project Collective Intelligence, plus Fairness in Data Science at the University of Twente. I lead labs, mentor students and supervised six bachelor theses, and was nominated for Best Teaching Assistant in 2026.</li>
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
