import React from 'react';
import CertificationItem from '../CertificationItem/CertificationItem';
import './CertificationsList.css';


// Import all images
import DatabricksCert from '../../assets/Databricks-Cert.png';
import DatabricksBadge from '../../assets/Databricks-Badge.png';
import GATV from '../../assets/GATV.png';
import GCSP from '../../assets/GCSP.png';
import GCSBadge from '../../assets/GCSBadge.png';
import GDR from '../../assets/GDR.png';
import AZF from '../../assets/AZF.png';
import CPN from '../../assets/CPN.png';
import PIW from '../../assets/PIW.png';
import TTS from '../../assets/TTS.png';
import FOC from '../../assets/FOC.png';
import PIS from '../../assets/PIS.png';
import SnowCert from '../../assets/SnowCert.png';
import DatabricksDEA from '../../assets/DatabricksDEA.png';
import AKafka from '../../assets/AKafka.png';
import LF from '../../assets/LF.png';
import BBOP from '../../assets/BBOP.png';
import AICert from '../../assets/AICert.png';
import AIBadge from '../../assets/AIBadge.png';
import ADS from '../../assets/ADS.png';
import DataAna from '../../assets/DataAna.png';
import DataAnaBadge from '../../assets/DataAnaBadge.png';
import DataViz from '../../assets/DataViz.png';
import Mathworks from '../../assets/Mathworks.png';
import PythonForDSCert from '../../assets/Python-For-DS-Cert.png';
import PythonForDS from '../../assets/Python-For-DS.png';
import ChatbotCert from '../../assets/Chatbot-Cert.png';
import ChatbotBadge from '../../assets/Chatbot-Badge.png';
import AWSCert from '../../assets/AWS-Certified-Solutions-Architect-Associate-2020.jpg';
import '../../styles/slideshow.css'; // Ensure common CSS is imported

const certifications = [
  {
    image: DatabricksCert,
    title: 'Databricks Lakehouse Fundamentals',
    description: 'Certification for Databricks Lakehouse Fundamentals.',
    date: 'Jul 10, 2024'
  },
  {
    image: DatabricksBadge,
    title: 'Databricks Lakehouse Fundamentals Badge',
    description: 'Badge for Databricks Lakehouse Fundamentals.',
    date: 'Jul 10, 2024'
  },
  {
    image: GATV,
    title: 'Assets, Threats, and Vulnerabilities',
    description: 'Google certification for Assets, Threats, and Vulnerabilities.',
    date: 'Jul 1, 2024'
  },
  {
    image: GCSP,
    title: 'Automate Cybersecurity Tasks with Python',
    description: 'Google certification for Automate Cybersecurity Tasks with Python.',
    date: 'Jul 1, 2024'
  },
  {
    image: GCSBadge,
    title: 'Google Cybersecurity Certificate',
    description: 'Google Cybersecurity Certificate badge.',
    date: 'Jul 1, 2024'
  },
  {
    image: GDR,
    title: 'Sound the Alarm: Detection and Response',
    description: 'Google certification for Sound the Alarm: Detection and Response.',
    date: 'Jul 1, 2024'
  },
  {
    image: AZF,
    title: 'Microsoft Certified: Azure Fundamentals',
    description: 'Microsoft certification for Azure Fundamentals.',
    date: 'Jul 16, 2024'
  },
  {
    image: CPN,
    title: 'Connect and Protect: Networks and Network Security',
    description: 'Google certification for Connect and Protect: Networks and Network Security.',
    date: 'Jun 4, 2024'
  },
  {
    image: PIW,
    title: 'Put It to Work: Prepare for Cybersecurity Jobs',
    description: 'Google certification for Put It to Work: Prepare for Cybersecurity Jobs.',
    date: 'Jul 1, 2024'
  },
  {
    image: TTS,
    title: 'Tools of the Trade: Linux and SQL',
    description: 'Google certification for Tools of the Trade: Linux and SQL.',
    date: 'Jul 1, 2024'
  },
  {
    image: FOC,
    title: 'Foundations of Cybersecurity',
    description: 'Google certification for Foundations of Cybersecurity.',
    date: 'Mar 14, 2024'
  },
  {
    image: PIS,
    title: 'Play It Safe: Manage Security Risks',
    description: 'Google certification for Play It Safe: Manage Security Risks.',
    date: 'Apr 13, 2024'
  },
  {
    image: SnowCert,
    title: 'Ultimate SnowPro Core Certification Course & Exam - 2023',
    description: 'Udemy certification for SnowPro Core Certification.',
    date: 'May 29, 2023'
  },
  {
    image: DatabricksDEA,
    title: 'Databricks Certified Data Engineer Associate',
    description: 'Udemy certification for Databricks Data Engineer Associate.',
    date: 'Jan 16, 2024'
  },
  {
    image: AKafka,
    title: 'Apache Kafka Series - Learn Apache Kafka for Beginners v3',
    description: 'Udemy certification for Apache Kafka for Beginners.',
    date: 'Jun 9, 2022'
  },
  {
    image: LF,
    title: 'Introduction to Linux',
    description: 'Linux Foundation certification for Introduction to Linux.',
    date: 'Apr 15, 2021'
  },
  {
    image: BBOP,
    title: 'AI Foundations for Everyone',
    description: 'IBM certification for AI Foundations for Everyone.',
    date: 'Aug 16, 2020'
  },
  {
    image: AICert,
    title: 'Artificial Intelligence Foundations Specialization',
    description: 'IBM specialization in AI Foundations.',
    date: 'Aug 16, 2020'
  },
  {
    image: AIBadge,
    title: 'Applied Data Science Capstone',
    description: 'IBM badge for Applied Data Science Capstone.',
    date: 'Jul 21, 2020'
  },
  {
    image: ADS,
    title: 'Data Visualization with Python',
    description: 'IBM certification for Data Visualization with Python.',
    date: 'Jul 9, 2020'
  },
  {
    image: DataAna,
    title: 'Data Analysis with Python',
    description: 'IBM certification for Data Analysis with Python.',
    date: 'Jul 5, 2020'
  },
  {
    image: DataAnaBadge,
    title: 'Data Analysis with Python Badge',
    description: 'IBM badge for Data Analysis with Python.',
    date: 'Jul 5, 2020'
  },
  {
    image: DataViz,
    title: 'Data Visualization with Python Badge',
    description: 'IBM badge for Data Visualization with Python.',
    date: 'Jul 9, 2020'
  },
  {
    image: Mathworks,
    title: 'Machine Learning Onramp',
    description: 'MathWorks certification for Machine Learning Onramp.',
    date: 'Jun 2, 2020'
  },
  {
    image: PythonForDSCert,
    title: 'Python for Data Science, AI & Development',
    description: 'IBM certification for Python for Data Science, AI & Development.',
    date: 'Jun 28, 2020'
  },
  {
    image: PythonForDS,
    title: 'Python for Data Science and AI',
    description: 'IBM badge for Python for Data Science and AI.',
    date: 'Jun 28, 2020'
  },
  {
    image: ChatbotCert,
    title: 'Building AI Powered Chatbots Without Programming',
    description: 'IBM certification for Building AI Powered Chatbots Without Programming.',
    date: 'May 30, 2020'
  },
  {
    image: ChatbotBadge,
    title: 'Chatbot Building Essentials',
    description: 'IBM badge for Chatbot Building Essentials.',
    date: 'May 30, 2020'
  },
  {
    image: AWSCert,
    title: 'AWS Certified Solutions Architect Associate 2020',
    description: 'Certification for AWS Solutions Architect Associate.',
    date: 'Jan 3, 2019'
  }
];

const Certifications = () => {
  return (
    <div className="certifications">
      {certifications.map((cert, index) => (
        <CertificationItem
          key={index}
          image={cert.image}
          title={cert.title}
          description={cert.description}
          date={cert.date}
        />
      ))}
    </div>
  );
};

export default Certifications;
