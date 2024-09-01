// src/components/PublicationList/PublicationList.jsx
import React from 'react';
import './PublicationList.css';
import PublicationItem from '../PublicationItem/PublicationItem';
import publication1 from '../../assets/publication1.png';
import publication2 from '../../assets/publication2.png';
import publication3 from '../../assets/publication3.png';
import publication4 from '../../assets/publication4.png';
import publication5 from '../../assets/publication5.png';

const publications = [
    {
        image: publication1,
        title: "A Novel Approach towards Healthcare using Identity Access Management and Machine Learning",
        description: "Research Paper on Healthcare Management Systems as part of my Bachelors Final Thesis",
        paperLink: "https://www.academia.edu/83239179/A_Novel_Approach_towards_Healthcare_using_Identity_Access_Management_and_Machine_Learning?auto_accept_coauthor=true",
        summaryLink: "https://www.academia.edu/83239179/A_Novel_Approach_towards_Healthcare_using_Identity_Access_Management_and_Machine_Learning?auto_accept_coauthor=true",
        summary: "Advances around the field of deep learning and cognitive computing have allowed mankind to look at and solve the problems of the world in a completely new way. Early detection of some deadly diseases helps save millions of lives but still, it has been observed that there seems to be no change in the way diagnosis of a particular disease takes place even in the 21st Generation of Medical Health Care. The highlight of the reasons happens to be Lack of Trust, Lack of Awareness, and Lack of Infrastructure. The health care industry seems to land blocked by their rigid methodologies and to this date, there is no involvement of the patient and caretaker staff in the digitalization of healthcare. In this project, we will introduce a digital platform for healthcare that aims to reduce the gap between a doctor, patient, and the caretaker staff. This platform is based on data, that can assist surgeons, patients, and care teams throughout the patient journey by automating some of the critical processes that are now done manually, including decision-making, post-surgery planning, tracking, and estimating recovery time, smart disease detection models, and collecting patient feedback. An important aspect of this platform will be the disease prediction models wherein we have prepared three different disease prediction models that will be able to detect if a user has that specific disease or not without the consultation of the Doctor. Here we have talked about the adoption of Deep Learning and Artificial Intelligence in today’s Healthcare scenario and the crucial role of delivering such applications to the user on a single platform.",
        publication: "IJRASET Publication",
    },
    {
        image: publication2,
        title: "Applications of Disease Detection using Digital Image Processing Techniques",
        description: "Research Paper on Healthcare Deep Learning Models as part of my Bachelors Final Thesis",
        paperLink: "https://digitalcommons.unl.edu/libphilprac/5765/",
        summaryLink: "https://digitalcommons.unl.edu/libphilprac/5765/",
        summary: "The title of this paper was Applications of Disease Detection using Digital Image Processing Techniques which involved a study of concepts such as Neural Networks and the machine learning algorithm related to it. The paper also discussed the idea of a disease prediction model based on 3 different diseases and their application in the Medical Field.",
        publication: "Journal ABC",
        researchPeers: "Researcher 3, Researcher 4"
    }
];

const communityWorks = [
    {
        image: publication3,
        title: "Community Work 1",
        description: "Conferences Experience",
        paperLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summaryLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summary: "Got the opportunity to represent India and my College as a Delegate. Networked and took active participation in all keynote sessions surrounding Leadership, Healthcare, and Social Causes. HPAIR is an internationally recognized student organization at Harvard College, offering a forum of exchange to facilitate discussion of the most important economic, political, and social issues relevant to the Asia-Pacific region.",
        
    },
    {
        image: publication4,
        title: "NGO and Social Work Expierence",
        description: "Internship with an NGO",
        paperLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summaryLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summary: "As part of my internship project, I worked as a Website Developer Intern. The topic of the project that I worked on was E-Commerce platform for women empowerment. Designed and delivered an E-Commerce website for an NGO, enabling the sale of handloom products and custom artwork, contributing to rural women's economic empowerment and employment. Ensured a timely and seamless deployment of the website.",
    },
    {
        image: publication5,
        title: "Communique International Telecom Conference",
        description: "Conferences Experience",
        paperLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summaryLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summary: "Represented College in the Communique International Telecom Seminar. The annual fest of Symbiosis Institute of Telecom Management. It explored whether the present ecosystem is resilient enough to sustain developments or the converging telecom tumultuous will topple the ICT domain. Imminent speakers from COAI, Oracle, Yes Bank, Accenture, etc. graced the event and shared their rich experiences during panel discussions and keynote sessions.",
        
    },
];

const PublicationList = () => {
    return (
        <div className="publication-list">
            <h2 style={{ textAlign: 'left', marginBottom: '10px', marginTop: '-20px' }}>Research</h2>
            <div className="publication-items">
                {publications.map((pub, index) => (
                    <PublicationItem key={index} publication={pub} />
                ))}
            </div>
            <h2 style={{ textAlign: 'left', marginBottom: '10px', marginTop: '40px' }}>Community Work Engagement</h2>
            <div className="publication-items">
                {communityWorks.map((work, index) => (
                    <PublicationItem key={index} publication={work} />
                ))}
            </div>
        </div>
    );
};

export default PublicationList;
