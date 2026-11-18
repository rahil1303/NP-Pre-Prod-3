import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import * as pdfjsLib from 'pdfjs-dist';
import './index.css';
import './SimplePDFViewer.css';

// The pdf.js worker is served from /public (pdfjs-dist 2.16.105) instead of a CDN.
const WORKER_URL = '/pdf.worker.min.js';
pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_URL;

// Current CV versions (November 2026). Files live in /public.
const resumes = [
    { id: 'ai', label: 'AI Software Engineer', file: '/Rahil_Sharma_CV_AI_Software_Engineer.pdf' },
    { id: 'data', label: 'Data Engineer', file: '/Rahil_Sharma_CV_Data_Engineer.pdf' },
    { id: 'integration', label: 'Data & Integration Engineer', file: '/Rahil_Sharma_CV_Data_Integration_Engineer.pdf' },
    { id: 'cloud', label: 'Cloud & AWS Engineer', file: '/Rahil_Sharma_CV_Cloud_AWS.pdf' },
];

const SimplePDFViewer = () => {
    const [active, setActive] = useState(resumes[0]);

    return (
        <div className="pdf-viewer-container">
            <div className="resume-tabs" role="tablist">
                {resumes.map((r) => (
                    <button
                        key={r.id}
                        role="tab"
                        aria-selected={active.id === r.id}
                        className={`resume-tab${active.id === r.id ? ' active' : ''}`}
                        onClick={() => setActive(r)}
                    >
                        {r.label}
                    </button>
                ))}
            </div>
            <div className="resume-container">
                <Worker workerUrl={WORKER_URL}>
                    <Viewer key={active.id} fileUrl={active.file} />
                </Worker>
            </div>
            <div className="download-container">
                <a href={active.file} download className="download-button">
                    Download {active.label} CV
                </a>
            </div>
        </div>
    );
};

export default SimplePDFViewer;
