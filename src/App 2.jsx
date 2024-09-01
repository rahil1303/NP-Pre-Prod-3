import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import SimplePDFViewer from './SimplePDFViewer';
import Publications from './pages/Publications/Publications';
import AchievementsPage from './pages/Achievements/AchievementsPage';
import EducationPage from './pages/Education/EducationPage';
import NavBar from './components/Navbar/Navbar';
import CertificationsPage from './pages/Certifications/CertificationsPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import SkillsCategory from './pages/Skills/SkillsPage';
import AboutPage from './pages/About/AboutPage';





function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={SimplePDFViewer} />
                <Route path="/publications" component={Publications} />
                <Route path="/achievements" component={AchievementsPage} />
                <Route path="/education" component={EducationPage} />
                <Route path="/certifications" component={CertificationsPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/skills" component={SkillsCategory} />
                <Route path="/about" component={AboutPage} />

            </Switch>
        </Router>
    );
}

export default App;
