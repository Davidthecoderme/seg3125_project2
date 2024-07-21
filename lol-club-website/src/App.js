import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Champions from './pages/Champions';
import Guides from './pages/Guides';
import Community from './pages/Community';
import JoinUs from './pages/JoinUs';
import Logo from './photos/logo.png';
import translations from './language';
import './App.css';
import Button from './context/Button';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleContinue = () => {
    setShowWelcome(false);
    navigate('/');
  };

  const [language, setLanguage] = useState('en');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const lan = translations[language];

  return (
    <div className="App">
      {showWelcome ? (
        <div className="welcome-message">
          <h2>Welcome to LoLProClub</h2>
          <button onClick={handleContinue}>Continue</button>
        </div>
      ) : (
        <>
          <header className="App-header">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <h1>LoLProClub</h1>
            </div>
            <nav>
              <Link to="/">{lan.home}</Link>
              <Link to="/champions">{lan.champions}</Link>
              <Link to="/guides">{lan.guides}</Link>
              <Link to="/community">{lan.community}</Link>
              <Link to="/join">{lan.joinUs}</Link>
            </nav>
            <div className="language-toggle">
              <Button lang='en' toggleLanguage={toggleLanguage}>English</Button>
              <Button lang='fr' toggleLanguage={toggleLanguage}>Français</Button>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/champions" element={<Champions language={language} />} />
            <Route path="/guides" element={<Guides language={language} />} />
            <Route path="/community" element={<Community language={language} />} />
            <Route path="/join" element={<JoinUs language={language} />} />
          </Routes>
          <footer>
            <p>follow us: LoLProClub@instagram.com</p>
            <p><a href="#privacy">Privacy Policy</a></p>
          </footer>
        </>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
