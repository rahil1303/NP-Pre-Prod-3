import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import * as pdfjsLib from 'pdfjs-dist';
import './index.css';
import './SimplePDFViewer.css';


pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const SimplePDFViewer = () => {
    return (
        <div className="pdf-viewer-container">
            <div className="resume-container">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`}>
                    <Viewer fileUrl="/Resume_3.pdf" />
                </Worker>
            </div>
            <div className="download-container">
                <a href="/Resume_3.pdf" download className="download-button">
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default SimplePDFViewer;
