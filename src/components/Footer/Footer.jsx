import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import './Footer.css';
import { CONTACT } from '../../contact';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-cta">
                <h2>Let's work together</h2>
                <p>AI Engineer · Technical Consultant · Data Engineer. Dutch Orientation Year permit, available immediately.</p>
            </div>
            <div className="footer-links">
                <a href={`mailto:${CONTACT.email}`}><FaEnvelope /> {CONTACT.email}</a>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                <Link to="/resume"><FaFileAlt /> Resume</Link>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} Rahil Sharma · {CONTACT.location}</p>
        </footer>
    );
};

export default Footer;
