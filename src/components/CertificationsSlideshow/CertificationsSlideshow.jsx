// src/components/CertificationsSlideshow/CertificationsSlideshow.jsx
import React, { useState, useEffect } from 'react';
import './CertificationsSlideshow.css';
import AWS from '../../assets/AWS-Certified-Solutions-Architect-Associate-2020.jpg';
import ChatbotBadge from '../../assets/Chatbot-Badge.png';
import ChatbotCert from '../../assets/Chatbot-Cert.png';
import PythonForDS from '../../assets/Python-For-DS.png';
import PythonForDSCert from '../../assets/Python-For-DS-Cert.png';
import Mathworks from '../../assets/Mathworks.png';
import Dataviz from '../../assets/DataViz.png';
import DataAna from '../../assets/DataAna.png';
import DataAnaBadge from '../../assets/DataAnaBadge.png';
import AIBadge from '../../assets/AIBadge.png';
import AICert from '../../assets/AICert.png';
import BBOP from '../../assets/BBOP.png';
import LF from '../../assets/LF.png';
import AKafka from '../../assets/AKafka.png';
import DatabricksDEA from '../../assets/DatabricksDEA.png';
import SnowCert from '../../assets/SnowCert.png';
import FOC from '../../assets/FOC.png';
import PIS from '../../assets/PIS.png';
import TTS from '../../assets/TTS.png';
import PIW from '../../assets/PIW.png';
import CPN from '../../assets/CPN.png';
import AZF from '../../assets/AZF.png';
import GDR from '../../assets/GDR.png';
import GCSP from '../../assets/GCSP.png';
import GATV from '../../assets/GATV.png';
import DatabricksBadge from '../../assets/Databricks-Badge.png';
import DatabricksCert from '../../assets/Databricks-Cert.png';
import '../../styles/slideshow.css'; // Ensure common CSS is imported


const certifications = [
    AWS, ChatbotBadge, ChatbotCert, PythonForDS, PythonForDSCert, Mathworks,
    Dataviz, DataAna, DataAnaBadge, AIBadge, AICert, BBOP, LF, AKafka,
    DatabricksDEA, SnowCert, FOC, PIS, TTS, PIW, CPN, AZF, GDR, GCSP, GATV,
    DatabricksBadge, DatabricksCert
];

const CertificationsSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % certifications.length);
        }, 8000); // Change every 8 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % certifications.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + certifications.length) % certifications.length);
    };

    return (
        <div className="slideshow">
            <button className="prev" onClick={handlePrev}>&#10094;</button>
            <div className="slide">
                <img src={certifications[currentIndex]} alt="Certification" className="slide-image" />
            </div>
            <button className="next" onClick={handleNext}>&#10095;</button>
        </div>
    );
};

export default CertificationsSlideshow;
