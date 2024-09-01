// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PDFViewer from './components/PDFViewer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<PDFViewer />} />
            </Routes>
        </Router>
    );
}

export default App;
