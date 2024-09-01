import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="resume-container">
      <div className="resume-content">
        <Viewer fileUrl="/Resume.pdf" plugins={[defaultLayoutPluginInstance]} />
      </div>
      <div className="resume-download">
        <a href="/Resume.pdf" download>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;

