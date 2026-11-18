import React from 'react';
import './ProjectsPage.css';

/*
 * Projects are grouped into rows, Netflix style:
 *   featured  -> industry-relevant engineering work (shown first)
 *   applied   -> applied ML / NLP / analytics projects
 *   archive   -> earlier work from 2019 to 2023
 * Each project can have several links; a project without a real link simply shows no button.
 */

const sections = [
    {
        id: 'featured',
        title: 'Featured Engineering Projects',
        subtitle: 'Production-minded work across data engineering, backend systems and trustworthy AI.',
        projects: [
            {
                name: 'Auditable Financial Fraud Detection',
                meta: '2026 · University of Amsterdam',
                badge: 'Paper accepted · Pre-ICIS SIGDSA 2026',
                tech: ['Python', 'XGBoost', 'Graph Features', 'Anomaly Detection', 'SHAP', 'AI Agents'],
                description: 'An end-to-end fraud detection pipeline built around one question: can every decision be audited? It combines gradient-boosted models with graph and anomaly features, explains each prediction with exact SHAP values, and adds an AI-assisted investigation layer that writes structured case rationales.',
                highlights: [
                    'Evaluated on 6.3M+ financial transactions.',
                    'Confidence-based escalation routes conflicting model and agent decisions to human review.',
                    'Single-author paper accepted at the Pre-ICIS SIGDSA Symposium 2026 in Lisbon.'
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com/rahil1303/auditable-fraud-investigation' },
                    { label: 'Paper', url: 'https://arxiv.org/abs/2607.19266' }
                ]
            },
            {
                name: 'Adaptive LLM Reasoning Platform',
                meta: '2026 · VU Amsterdam',
                tech: ['Python', 'FastAPI', 'React', 'RAG', 'Vector Search', 'GPT', 'LLaMA', 'Qwen', 'Groq'],
                description: 'A full-stack RAG platform that compares several LLM families under identical retrieval conditions. Retrieval setup, model choice and evaluation criteria can each be changed independently, so the effect of every design decision can be isolated and measured.',
                highlights: [
                    'Semantic chunking and vector retrieval with configurable similarity metrics and ranked context inspection.',
                    'Multi-model routing plus a multi-round critique engine for answer quality and reasoning consistency.',
                    'Side-by-side comparison, contextual highlighting and exportable evaluation logs.'
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com/rahil1303/adaptive-llm-reasoning-platform' }
                ]
            },
            {
                name: 'Schema-Aware dbt Pipeline',
                meta: '2025 · VU Amsterdam',
                tech: ['dbt', 'SQL', 'Jinja', 'PostgreSQL', 'Snowflake', 'Data Quality'],
                description: 'A config-driven dbt package that enforces data quality contracts (bounded ranges, completeness and spike detection) through generic tests, with a reference Spotify tracks pipeline as its integration test.',
                highlights: [
                    'Layered staging, intermediate and mart models over 114,000+ records.',
                    'Reusable tests and Jinja macros, with documentation and lineage maintained in dbt.',
                    'Adapter-specific validation via dbt dispatch, so the same logic runs on PostgreSQL and Snowflake.'
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com/rahil1303/dbt_schema_aware_pipeline' }
                ]
            },
            {
                name: 'OBFI: Privacy-Preserving Protocols as Distributed Software',
                meta: '2025 to 2026 · CWI Amsterdam (MSc thesis)',
                badge: 'Published on PyPI',
                tech: ['Python', 'gRPC', 'Cryptography', 'Distributed Systems', 'Benchmarking'],
                description: 'Turned two formal cryptographic protocols for Oblivious Bloom Filter Insertion into a working client-server system, then measured where each one wins. Formal specifications became executable, testable services, and ambiguities in the prior research were resolved along the way.',
                highlights: [
                    'Distributed Python services over gRPC with encryption, persistence and automated correctness tests.',
                    'Reproducible experiments across batch sizes and filter capacities, ending in a protocol selection framework.',
                    'Released pyobfi, a Python CLI package for running the experiments.'
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com/rahil1303/obfi-implementation-and-empirical-analysis' },
                    { label: 'PyPI', url: 'https://pypi.org/project/pyobfi/' },
                    { label: 'Thesis', url: 'https://doi.org/10.5281/zenodo.22019435' }
                ]
            },
            {
                name: 'Explicit Garbage Collection: Cadence, Reclamation and Cost',
                meta: '2026 · VU Amsterdam',
                badge: 'Under review',
                tech: ['Java 21', 'JVM', 'DaCapo', 'JFR', 'EnergiBridge', 'Python', 'Statistics'],
                description: 'A large controlled experiment on what really happens when applications call System.gc(). I built the injection harness, a GC log parser that handles five collectors, and the full analysis pipeline.',
                highlights: [
                    '12 Java workloads, 5 collectors (Serial, Parallel, G1, Shenandoah, ZGC) and 4 cadence levels, 2,382 valid runs.',
                    'Found that explicit GC helps ZGC at higher cadence but steadily slows G1 and Shenandoah and makes them more energy-hungry.'
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com/rahil1303/gc-explicit-cadence-replication' }
                ]
            },
            {
                name: 'Energy and Performance Trade-offs of Java GC Strategies',
                meta: '2025 · VU Amsterdam',
                badge: 'Submitted · GREENS 2027 @ ICSE',
                tech: ['Java', 'Python', 'EnergiBridge', 'Intel RAPL', 'ANOVA'],
                description: 'An empirical study of the energy and performance trade-offs of the Serial, Parallel and G1 collectors across 324 randomised block-design runs, with automated data collection and statistical validation (ANOVA, Tukey HSD).',
                highlights: [
                    'Extended into a paper on whether GC energy rankings generalise across workloads and JDKs.'
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com/rahil1303/Green-Lab-Course-Work-Group-5' },
                    { label: 'Paper', url: 'https://arxiv.org/abs/2608.19520' }
                ]
            },
            {
                name: 'PACSHAP-FeatureGraph: Privacy-Aware Feature Attribution',
                meta: '2025 · University of Amsterdam',
                tech: ['Python', 'SHAP', 'Autoencoders', 'Knowledge Graphs', 'GDPR'],
                description: 'A feature selection framework that combines PAC-privacy guarantees with explainable AI, using SHAP values and knowledge graph reasoning for interpretable attribution aligned with GDPR data minimisation.',
                highlights: [
                    'End-to-end pipelines for heterogeneous numerical and categorical data.',
                    'Better interpretability and privacy-accuracy trade-offs than traditional feature selection.'
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com/rahil1303/PACSHAP-FeatureGraph' }
                ]
            }
        ]
    },
    {
        id: 'applied',
        title: 'Applied ML, NLP and Analytics',
        subtitle: 'Data-heavy projects from my MSc.',
        projects: [
            {
                name: 'Reactivity-Reflectivity Vector Framework (RRVF)',
                meta: 'VU Amsterdam',
                tech: ['Python', 'NLP', 'Transformers', 'YouTube API'],
                description: 'A framework that measures political polarisation through behavioural signals instead of left-right labels. It collects and processes large-scale YouTube transcript and comment data around major political events and turns framing, engagement and reflectiveness into quantifiable features.',
                links: [
                    { label: 'GitHub', url: 'https://github.com/rahil1303/Social_Web_Project_Work' }
                ]
            },
            {
                name: 'Smartphone Activity Classification System',
                meta: 'VU Amsterdam',
                tech: ['Python', 'scikit-learn', 'LSTM', 'Sensor Fusion'],
                description: 'Activity recognition from smartphone and smartwatch sensors (accelerometer, gyroscope, heart rate). Engineered time and frequency domain features and compared Random Forest, SVM, KNN and LSTM models.',
                links: [
                    { label: 'Report', url: 'https://drive.google.com/file/d/16ysb-zkIarldtzvLlAyKsdYi9UgqWaQ4/view?usp=sharing' }
                ]
            },
            {
                name: 'Fact-Checking Pipeline with NLP and Knowledge Graphs',
                meta: 'VU Amsterdam',
                tech: ['Python', 'Transformers', 'NLTK', 'Wikidata', 'DBpedia'],
                description: 'A hybrid fact verification pipeline that combines deep-learning textual entailment with multi-source entity validation against Wikidata and DBpedia, plus explainability to visualise the evidence behind each verdict.',
                links: [
                    { label: 'Report', url: 'https://drive.google.com/file/d/1xaqfK_VsEtN5wWcU20s6ae-f67DFGxm7/view?usp=sharing' }
                ]
            }
        ]
    },
    {
        id: 'archive',
        title: 'Earlier Work (2019 to 2023)',
        subtitle: 'Where it started: hackathons, my bachelor years and my full-stack programme at IIIT Bangalore.',
        compact: true,
        projects: [
            {
                name: 'Medicus: Smart Care Assistant for Healthcare',
                tech: ['IBM Watson', 'Python', 'Django'],
                description: 'A predictive, chatbot-enabled assistant for surgeons, patients and care teams that automates decision support, post-surgery planning, tracking and recovery-time estimates. Won the AGBI Health-Tech Grand Challenge (NITI Aayog and Mehta Group of Hospitals).',
                links: [{ label: 'GitHub', url: 'https://github.com/rahil1303/Project-AR-Medicus/tree/main' }]
            },
            {
                name: 'Yelp-inspired Full Stack Web Application',
                tech: ['React', 'JavaScript', 'Java', 'CSS', 'Postman'],
                description: 'Capstone project for the Executive PG Programme in Software Development at IIIT Bangalore, with a React frontend and a Java backend.',
                links: [{ label: 'GitHub', url: 'https://github.com/rahil1303/Yelp-Inspired-Backend-Design-Project' }]
            },
            {
                name: 'Design Patterns in Practice: Disease Statistics Monitor',
                tech: ['Java', 'Spring Boot', 'REST APIs'],
                description: 'RESTful API development with Factory and Strategy design patterns and structured error handling, built for tracking disease count statistics.',
                links: [{ label: 'GitHub', url: 'https://github.com/rahil1303/Exploring-Design-Patterns-with-FSD-' }]
            },
            {
                name: 'CostCloud: AI-Assisted Cloud Cost Comparison',
                tech: ['Python', 'Java', 'Django', 'TensorFlow', 'scikit-learn'],
                description: 'An early prototype that analyses cloud resource usage and compares costs across providers using ML.',
                links: [{ label: 'GitHub', url: 'https://github.com/rahil1303/CostCloudAI' }]
            },
            {
                name: 'Secure Cloud Infrastructure on Microsoft Azure',
                tech: ['Azure', 'Storage', 'Networking'],
                description: 'Designed a secure, scalable Azure infrastructure focused on storage management and accessibility during a three-month internship at Verzeo, where I received the Outstanding Performer Award.',
                links: []
            },
            {
                name: 'Brain Tumour, Pancreatic Tumour and COVID-19 Detection',
                tech: ['Python', 'TensorFlow', 'Django'],
                description: 'Deep-learning image classification models for several diagnoses, served through a Django application. Part of my bachelor research.',
                links: [{ label: 'GitHub', url: 'https://github.com/rahil1303/BRAIN_TUMOUR_DETECTION_USING_DEEP_LEARNING/tree/main' }]
            },
            {
                name: 'Heart Disease Prediction',
                tech: ['IBM Cloud', 'Watson ML', 'Python', 'Node.js'],
                description: 'A machine learning model predicting heart failure from patient health data, deployed on IBM Cloud.',
                links: [{ label: 'GitHub', url: 'https://github.com/rahil1303/predictive-model-on-watson-ml' }]
            },
            {
                name: 'Predictions and Analysis of CO2 Emissions of Cars',
                tech: ['Python', 'Regression', 'KNN', 'Classification'],
                description: 'Regression and classification models predicting vehicle CO2 emissions.',
                links: [{ label: 'GitHub', url: 'https://github.com/rahil1303/Prediction-and-Analysis-of-CO2-EMISSIONS-OF-CARS/tree/master' }]
            },
            {
                name: 'Segmentation and Clustering of a City',
                tech: ['Python', 'Foursquare API', 'Pandas', 'Folium'],
                description: 'Venue clustering with the Foursquare API to map neighbourhoods by cuisine, supermarkets and other amenities. IBM Applied Data Science capstone.',
                links: [{ label: 'GitHub', url: 'https://github.com/rahil1303/Applied-Data-Science/tree/master' }]
            },
            {
                name: 'Chatbot for a Small Business',
                tech: ['IBM Watson', 'WordPress'],
                description: 'A WordPress website with a deployed IBM Watson chatbot that helps customers of a small florist.',
                links: [{ label: 'Badge', url: 'https://www.credly.com/badges/18675a36-834c-4182-b0e5-fe50f719ca9d/linked_in_profile' }]
            },
            {
                name: 'Hotel Management System',
                tech: ['Java', 'NetBeans', 'MySQL'],
                description: 'Desktop software automating room booking and hotel management.',
                links: [{ label: 'GitHub', url: 'https://github.com/rahil1303/Hotel-Management-System' }]
            },
            {
                name: 'Overspeed Vehicle Detection',
                tech: ['Arduino', 'GPS', 'IR Sensors'],
                description: 'An embedded system that detects and reports vehicles exceeding speed limits.',
                links: []
            },
            {
                name: 'Watch Try-On AR App',
                tech: ['Unity', 'Vuforia'],
                description: 'An augmented reality app for trying on virtual watches.',
                links: []
            }
        ]
    }
];

const ProjectCard = ({ project, compact }) => (
    <div className={`project-card${compact ? ' compact' : ''}`}>
        <div>
            {project.badge && <span className="project-badge">{project.badge}</span>}
            <h2 className="project-name">{project.name}</h2>
            {project.meta && <p className="project-meta">{project.meta}</p>}
            <div className="project-tech">
                {project.tech.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                ))}
            </div>
            <p className="project-description">{project.description}</p>
            {project.highlights && project.highlights.length > 0 && (
                <ul className="project-highlights">
                    {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                </ul>
            )}
        </div>
        {project.links && project.links.length > 0 && (
            <div className="project-links">
                {project.links.map((link) => (
                    <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-demo"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        )}
    </div>
);

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <h1 className="page-title">Projects</h1>
            {sections.map((section) => (
                <section key={section.id} className="projects-section">
                    <h2 className="section-title">{section.title}</h2>
                    <p className="section-subtitle">{section.subtitle}</p>
                    <div className={`projects-grid${section.compact ? ' compact' : ''}`}>
                        {section.projects.map((project) => (
                            <ProjectCard key={project.name} project={project} compact={section.compact} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ProjectsPage;
