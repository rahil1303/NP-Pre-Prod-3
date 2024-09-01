// src/components/PDFViewer.jsx
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resumePdf from '../assets/Resume.pdf';

const PDFViewer = () => {
    return (
        <div className="pdf-viewer">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js`}>
                <Viewer fileUrl={resumePdf} />
            </Worker>
        </div>
    );
};

export default PDFViewer;
