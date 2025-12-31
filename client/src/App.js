import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import TalkToExpertPopup from './components/TalkToExpertPopup';
import ScrollToTop from './components/ScrollToTop';
import HangingLamp from './components/HangingLamp';
import { DarkModeProvider } from './contexts/DarkModeContext';
import './styles/App.css';

function App() {
  const [showExpertPopup, setShowExpertPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <HangingLamp />
          <Navbar scrolled={scrolled} onExpertClick={() => setShowExpertPopup(true)} />
        
        <Routes>
          <Route path="/" element={<Home onExpertClick={() => setShowExpertPopup(true)} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer onExpertClick={() => setShowExpertPopup(true)} />

        {showExpertPopup && (
          <TalkToExpertPopup onClose={() => setShowExpertPopup(false)} />
        )}
      </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
