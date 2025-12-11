import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';
import SpiderCursor from './components/SpiderCursor';
import Terminal from './components/Terminal';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import CTFWriteups from './pages/CTFWriteups';
import ADWriteups from './pages/ADWriteups';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-transparent text-gray-900 dark:text-white font-sans selection:bg-neon-red selection:text-white overflow-x-hidden relative">
        <SpiderCursor />
        <ParticleBackground />
        <Navbar toggleTerminal={() => setIsTerminalOpen(true)} />
        <ThemeToggle />
        <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />


        <Routes>
          <Route path="/" element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="skills"><Skills /></section>
              <section id="certifications"><Certifications /></section>
              <section id="contact"><Contact /></section>
            </>
          } />
          <Route path="/blogs/ctf" element={<CTFWriteups />} />
          <Route path="/blogs/ad" element={<ADWriteups />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
