import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';
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
        <ParticleBackground />
        <Navbar toggleTerminal={() => setIsTerminalOpen(true)} />
        <ThemeToggle />
        <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/ctf" element={<CTFWriteups />} />
          <Route path="/blogs/ad" element={<ADWriteups />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
