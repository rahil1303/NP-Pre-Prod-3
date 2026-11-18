// src/components/PublicationList/PublicationList.jsx
import React from 'react';
import './PublicationList.css';
import PublicationItem from '../PublicationItem/PublicationItem';
import publication1 from '../../assets/publication1.png';
import publication2 from '../../assets/publication2.png';
import publication3 from '../../assets/publication3.png';
import publication4 from '../../assets/publication4.png';
import publication5 from '../../assets/publication5.png';
import publication6 from '../../assets/publication6.png';
import rsSigdsa from '../../assets/rs_sigdsa.jpg';
import rsGreens from '../../assets/rs_greens.jpg';
import rsEase from '../../assets/rs_ease.jpg';
import rsTeaching from '../../assets/rs_teaching.jpg';
import rsIcsa from '../../assets/rs_icsa.jpg';
import rsAmcis from '../../assets/rs_amcis.jpg';

// Fields: paperLink drives the "Sneak Peek" button; publication and researchPeers are optional
// and only shown in the summary popup when present.
const publications = [
    {
        image: rsSigdsa,
        title: "Toward Auditable Fraud Detection: Combining Graph Features, Model Explanations, and Agentic Case Investigation",
        description: "Accepted · Pre-ICIS SIGDSA Symposium 2026, Lisbon · Single author",
        paperLink: "https://arxiv.org/abs/2607.19266",
        summary: "Fraud detection systems are usually judged on accuracy alone, but in finance every flagged case has to be explained and defended. This paper builds a fraud detection pipeline on 6.3M+ transactions that combines XGBoost with graph and anomaly features, explains each prediction with exact SHAP values, and adds an AI-assisted investigation layer that writes structured case rationales. Its central argument is that auditability and correctness must be validated independently, with explicit boundaries for when an AI system may decide and when a case must go to human review.",
        publication: "Pre-ICIS SIGDSA Symposium 2026 (accepted); arXiv:2607.19266",
    },
    {
        image: rsGreens,
        title: "Do Garbage-Collector Energy Rankings Generalize? A Controlled Study of Java Workloads and JDKs",
        description: "Submitted · GREENS 2027 workshop, co-located with ICSE 2027",
        paperLink: "https://arxiv.org/abs/2608.19520",
        summary: "Developers and vendors often pick a Java garbage collector based on published energy rankings. This controlled study tests whether those rankings actually hold when the workload or the JDK changes, measuring the energy and performance of different collectors under a randomised block design with statistical validation.",
        publication: "Submitted to GREENS 2027 @ ICSE 2027; earlier version on arXiv:2608.19520",
    },
    {
        image: rsEase,
        title: "The Marginal Value of Explicit Garbage Collection: Cadence, Reclamation, and Cost Across Java Workloads",
        description: "Under review · VU Amsterdam · Supervised by Dr. I. Malavolta",
        paperLink: "https://github.com/rahil1303/gc-explicit-cadence-replication",
        summary: "What actually happens when an application calls System.gc()? This study injects explicit GC requests at four cadences across 12 Java workloads and 5 collectors (Serial, Parallel, G1, Shenandoah, ZGC), for 2,382 valid runs on a dedicated measurement server. Explicit GC increasingly benefits ZGC at higher cadence, while G1 and Shenandoah become steadily slower and more energy-hungry. Reclaiming more memory did not translate into better execution, because explicit collections often repeated work natural GC would have done anyway.",
        publication: "Under review (replication package on GitHub)",
    },
    {
        image: publication6,
        title: "OBFI: Implementation, Empirical Analysis, and Crossover Characterization of Competing Protocols",
        description: "MSc Thesis · CWI Amsterdam · Supervised by Dr. Marten van Dijk",
        paperLink: "https://doi.org/10.5281/zenodo.22019435",
        summary: "This thesis implements and empirically compares two cryptographic protocols for Oblivious Bloom Filter Insertion (OBFI) under strict client memory constraints. A distributed client-server system built with Python and gRPC turns formal theoretical specifications into executable systems. Experiments across batch sizes and filter capacities characterise real-world performance, and a decision framework selects between protocols based on deployment parameters and observed crossover points. The accompanying pyobfi package is published on PyPI.",
        publication: "CWI Amsterdam / VU-UvA MSc Thesis, 2026 (Zenodo, DOI 10.5281/zenodo.22019435)",
    },
    {
        image: publication1,
        title: "A Novel Approach towards Healthcare using Identity Access Management and Machine Learning",
        description: "IJRASET · Bachelor's thesis research",
        paperLink: "https://www.academia.edu/83239179/A_Novel_Approach_towards_Healthcare_using_Identity_Access_Management_and_Machine_Learning?auto_accept_coauthor=true",
        summary: "A digital healthcare platform that narrows the gap between doctors, patients and care staff by automating critical manual processes: decision-making, post-surgery planning, tracking, recovery-time estimates and patient feedback. At its core are three deep-learning disease prediction models, delivered together on a single platform secured with identity and access management.",
        publication: "IJRASET",
    },
    {
        image: publication2,
        title: "Applications of Disease Detection using Digital Image Processing Techniques",
        description: "Library Philosophy and Practice · Bibliometric review",
        paperLink: "https://digitalcommons.unl.edu/libphilprac/5765/",
        summary: "A bibliometric review of disease detection using digital image processing, covering neural networks and related machine learning algorithms, and proposing a disease prediction approach for three conditions and their application in medicine.",
        publication: "Library Philosophy and Practice (e-journal), University of Nebraska-Lincoln",
    }
];

const communityWorks = [
    {
        image: rsTeaching,
        title: "Senior Teaching Assistant, VU Amsterdam and University of Twente",
        description: "2024 to now · Teaching, mentoring and thesis supervision",
        paperLink: "https://rahil1303.github.io/teaching/",
        summary: "Senior TA for Text Mining for AI (3 editions), Learning Machines Robotics (3 editions) and Project Collective Intelligence (2 editions) at VU Amsterdam, and Fairness in Data Science (CreaTe Module 5) at the University of Twente. I lead labs, mentor students, help with grading, and supervised a cohort of six bachelor students in the Software Asset Management thesis module. Nominated for Best Teaching Assistant by the VU Faculty of Science in 2026.",
    },
    {
        image: rsIcsa,
        title: "Organising Committee, IEEE ICSA 2026",
        description: "International Conference on Software Architecture · VU Amsterdam",
        paperLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summary: "Member of the organising committee of the IEEE International Conference on Software Architecture 2026, hosted at Vrije Universiteit Amsterdam, which brings together software architecture researchers and industry practitioners.",
    },
    {
        image: rsAmcis,
        title: "Peer Reviewer, AMCIS 2025",
        description: "Americas Conference on Information Systems",
        paperLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summary: "Served as a peer reviewer for AMCIS 2025, one of the main conferences of the Association for Information Systems.",
    },
    {
        image: publication3,
        title: "Delegate, Harvard Project for Asian and International Relations (HPAIR)",
        description: "Conference experience",
        paperLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summary: "Represented India and my college as a delegate. Networked and took an active part in keynote sessions on leadership, healthcare and social causes. HPAIR is an internationally recognised student organisation at Harvard College that offers a forum to discuss the most important economic, political and social issues of the Asia-Pacific region.",
    },
    {
        image: publication4,
        title: "Website Developer Intern, Amanat Foundation (NGO)",
        description: "Social impact work",
        paperLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summary: "Designed and delivered an e-commerce website for an NGO, enabling the sale of handloom products and custom artwork and contributing to rural women's economic empowerment and employment. Ensured a timely and seamless deployment.",
    },
    {
        image: publication5,
        title: "Communique International Telecom Seminar",
        description: "Conference experience",
        paperLink: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/",
        summary: "Represented my college at the Communique International Telecom Seminar, the annual fest of the Symbiosis Institute of Telecom Management. It explored whether the current ecosystem is resilient enough to sustain new developments or whether telecom convergence will upend the ICT domain, with speakers from COAI, Oracle, Yes Bank and Accenture.",
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
            <h2 style={{ textAlign: 'left', marginBottom: '10px', marginTop: '40px' }}>Teaching, Service and Community Work</h2>
            <div className="publication-items">
                {communityWorks.map((work, index) => (
                    <PublicationItem key={index} publication={work} />
                ))}
            </div>
        </div>
    );
};

export default PublicationList;
