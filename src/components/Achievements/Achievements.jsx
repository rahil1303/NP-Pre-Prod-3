// src/components/Achievements/Achievements.jsx
import React from 'react';
import './Achievements.css';
import AchievementItem from './AchievementItem';
import preciselyStellarPerformer from '../../assets/preciselyStellarPerformer.png';
import preciselyLifeforceAward from '../../assets/preciselyLifeforceAward.png';
import preciselySpotAward from '../../assets/preciselySpotAward.png';
import ibmHackathon from '../../assets/ibmHackathon.png';
import youthZestContest from '../../assets/youthZestContest.png';
import techBharatHackathon from '../../assets/techBharatHackathon.png';
import verzeoOutstandingPerformer from '../../assets/verzeoOutstandingPerformer.jpg';
import agbiHealthTech from '../../assets/agbiHealthTech.png';
import preciselySpotAward2 from '../../assets/preciselySpotAward2.png';
import communiqueSeminar from '../../assets/communiqueSeminar.png';
import frenchOlympiad from '../../assets/frenchOlympiad.png';
import Recom1 from '../../assets/Recom1.png';
import Recom2 from '../../assets/Recom2.png';




const achievements = [
    {
        image: preciselyStellarPerformer,
        title: "Precisely Stellar Performer Award",
        date: "Sep 2023",
        description: "Recognized for my non-stop work on toes during September 2023, I was awarded the Stellar Award for outstanding contribution.",
        details: [
            "Skillfully juggled numerous high-priority tasks simultaneously, ensuring all deadlines were met.",
            "Worked closely with sales, development, partners, and on-shore teams, facilitating seamless communication and project alignment.",
            "Played a crucial role in a key Proof of Concept, contributing to its development and successful demonstration.",
            "Coordinated efforts to protect critical go-live dates for several clients, ensuring timely and successful launches."
        ]
    },
    {
        image: preciselyLifeforceAward,
        title: "Precisely Lifeforce Award",
        date: "Apr 2023",
        description: "Recognized and Nominated for exceptional dedication and unwavering commitment during a challenging 2 month period.",
        details: [
            "Successfully handled over 50 new cases with efficiency and professionalism.",
            "Prioritized client issues and resolved them promptly, even amidst high workloads and resource constraints.",
            "Reviewed and progressed cases owned by colleagues on leave, ensuring seamless customer care.",
            "Demonstrated a strong sense of accountability and commitment to customer success.",
            "Exemplified the spirit of excellence and dedication within the team, setting a high standard for professionalism."
        ]
    },
    {
        image: preciselySpotAward,
        title: "Spot Award January 2023",
        date: "Jan 2023",
        description: "As a driven and accomplished Software Support Engineer, I was recognized with a Second Spot Award for consistently delivering exceptional performance.",
        details: [
            "Demonstrated a customer-centric approach by resolving complex production cases promptly and effectively.",
            "Prepared tailored test environments for customer use-cases, expediting the issue replication process.",
            "Seamlessly collaborating with cross-functional teams (Engineering R&D, Professional Services) to address critical production issues.",
            "Efficiently resolving multiple complex support cases, achieving impressive Mean Time to Resolution (MTTR) and high customer satisfaction (CSAT).",
            "Recognized for significant contributions to team success, fostering a positive and collaborative work environment."
        ]
    },
    {
        image: ibmHackathon,
        title: "Top 10 Best Prototype Submission",
        date: "Nov 2021",
        description: "In the IBM Reimagine <Future> Hackathon 2021, my prototype was chosen as one of the top 10 best prototypes out of nearly 38000 verified registrations.",
        details: [
            "Received an honorable mention from the jury for addressing a pressing issue."
        ]
    },
    {
        image: youthZestContest,
        title: "Top 5 in Youth Zest Virtual Project Contest",
        date: "May 2021",
        description: "We received an honorable mention and praises from the Judges and the Organizers for addressing such a pressing issue such as through our project.",
        details: [
            "Our project was based upon the idea of Smart Healthcare addressing issues such as Mental Health, Geriatric Care, and Health Accessibility.",
            "Competed against around 1000+ teams and were ranked 5th among the top 10 teams."
        ]
    },
    {
        image: techBharatHackathon,
        title: "Top 2 in TECHBHARAT NATIONAL LEVEL HACKATHON",
        date: "Feb 2021",
        description: "Participated and Secured the second position in the TECHHARAT National Level HACKATHON supported by the Ministry of Human Resource Development, Ministry of Education, and All India Innovation Council of India.",
        details: [
            "Focused on creating solutions for 'Cognitive Health in Geriatric Population'.",
            "Developed a user-specific software for day-to-day check-ups, remainders, and a personal assistant friend."
        ]
    },
    {
        image: verzeoOutstandingPerformer,
        title: "Outstanding Performer Award",
        date: "Dec 2020",
        description: "Awarded the 'OUTSTANDING PERFORMER AWARD IN THE FIELD OF AZURE CLOUD COMPUTING' during my three month internship period.",
        details: [
            "Successfully completed three different major projects and three different minor projects without any mentor support.",
            "Led a group of 12 student interns during the major project phase of the Internship."
        ]
    },
    {
        image: agbiHealthTech,
        title: "Winner of AGBI Digital HealthTech Grand Challenge Hackathon",
        date: "Nov 2020",
        description: "Worked on a Smart Medical Assistant-enabled by a chatbot backed by data, that can help surgeons, patients, and care teams throughout the patient journey.",
        details: [
            "Secured the third position out of 1500+ teams all over India."
        ]
    },
    {
        image: communiqueSeminar,
        title: "Represented College in Communique International Telecom Seminar",
        date: "Aug 2018",
        description: "Represented College in the Communique International Telecom Seminar. The annual fest of Symbiosis Institute of Telecom Management.",
        details: [
            "Explored whether the present ecosystem is resilient enough to sustain developments or the converging telecom tumultuous will topple the ICT domain."
        ]
    },
    {
        image: preciselySpotAward2,
        title: "Spot Award July 2022",
        date: "Jan 2023",
        description: "As a driven and accomplished Software Support Engineer, I was recognized with a First Spot Award for consistently delivering exceptional performance.",
        details: [
            "Seamlessly collaborating with cross-functional teams (Engineering R&D, Professional Services) to address critical production issues.",
            "Efficiently resolving multiple complex support cases, achieving impressive Mean Time to Resolution (MTTR) and high customer satisfaction (CSAT).            ",
            "Recognized for significant contributions to team success, fostering a positive and collaborative work environment."
        ]
    },
    {
        image: frenchOlympiad,
        title: "Bronze Medalist in the International French Language Olympiad",
        date: "Jun 2018",
        description: "Secured 3rd Rank in the state and 63rd International Rank in the Internation French Language Olympiad in association with the French Embassy of India with a score of 95 out of 100.",
        details: [
            "Awarded the Bronze medal for the achievement and a scholarship to pursue a Diploma in French from the Alliance Francaise International Organization."
        ]
    },

    {
        image: Recom1,
        title: "Recommendation Letter from Precisely Software and Data India Private Limited",
        date: "August 2024",
        description: "Received a commendation from Precisely Software and Data India Private Limited for exceptional performance and leadership during my tenure as a Software Engineer I.",
        details: [
            "Praised for strong grasp of computer science fundamentals, dedication, and sincere work ethic.",
            "Recognized for eagerness to learn, acquire new skills, and take on challenging projects.",
            "Acknowledged for fostering a productive work environment and contributing innovative solutions.",
            "Endorsed for substantial contributions and potential by Senior Manager, Customer Support."
        ]
    },

    {
        "image": Recom2,
        "title": "Letter of Recommendation from College Dean",
        "date": "October 2023",
        "description": "A strong endorsement from the Director and Dean of the Faculty of Engineering at Symbiosis Institute of Technology, highlighting my academic rigor, innovative thinking, and extensive participation in both curricular and extracurricular activities, particularly in the field of Computer Science and Engineering.",
        "details": [
            "Acknowledges my intellectual curiosity and his proactive involvement in projects like 'Medicus: The SmartCare Assistant for Healthcare' and his participation in prestigious conferences and hackathons."
        ]
    }
    

    
];

const Achievements = () => {
    return (
        <div className="achievements-list">
            <h2>Achievements</h2>
            <div className="achievement-items">
                {achievements.map((achievement, index) => (
                    <AchievementItem key={index} achievement={achievement} />
                ))}
            </div>
        </div>
    );
};

export default Achievements;
