// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import search_icon from '../../assets/4.png';
import bell_icon from '../../assets/12.jpg';
import profile_img from '../../assets/7.png';
import caret_icon from '../../assets/6.png';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="Logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/achievements">Achievements</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/certifications">Certifications</Link></li>
                    <li><Link to="/skills">My Skills</Link></li>
                    <li><Link to="/publications">Research & Community Work</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="Search" className='icons' />
                <p>Children</p>
                <img src={bell_icon} alt="Notifications" className='icons' />
                <div className="navbar-profile">
                    <img src={profile_img} alt="Profile" className='profile' />
                    <img src={caret_icon} alt="Dropdown" className='caret' />
                    <div className="dropdown">
                        <p>Sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
