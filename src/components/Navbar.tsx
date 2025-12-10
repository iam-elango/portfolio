import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

interface NavbarProps {
    toggleTerminal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTerminal }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-neon-red/20 text-gray-900 dark:text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side: Terminal Button + Brand */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTerminal}
                        className="flex items-center space-x-2 text-green-700 dark:text-terminal-green hover:text-black dark:hover:text-white transition-colors border border-green-700 dark:border-terminal-green px-3 py-1 rounded hover:bg-green-700/20 dark:hover:bg-terminal-green/20 group"
                        aria-label="Open Terminal"
                    >
                        <Terminal size={18} />
                        <span className="hidden md:inline font-mono text-sm underline-offset-4 group-hover:underline">Terminal</span>
                    </button>
                    <div className="text-xl font-bold font-mono text-neon-red">
                        <Link to="/">Elangovan</Link>
                    </div>
                </div>

                {/* Right Side: Desktop Links */}
                <div className="flex space-x-6 hidden md:flex items-center">
                    <Link to="/" className="hover:text-neon-red transition hover:scale-105 transform">Home</Link>
                    <Link to="/about" className="hover:text-neon-red transition hover:scale-105 transform">About</Link>
                    <Link to="/skills" className="hover:text-neon-red transition hover:scale-105 transform">Skills</Link>
                    <Link to="/certifications" className="hover:text-neon-red transition hover:scale-105 transform">Certs</Link>

                    {/* Blogs Dropdown */}
                    <div className="relative group">
                        <button className="hover:text-neon-red transition hover:scale-105 transform flex items-center">
                            Blogs
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white/90 dark:bg-black/90 border border-gray-200 dark:border-neon-red/30 rounded-md shadow-neon opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                            <Link to="/blogs/ctf" className="block px-4 py-2 hover:bg-neon-red/10 hover:text-neon-red transition-colors border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">CTF Writeups</Link>
                            <Link to="/blogs/ad" className="block px-4 py-2 hover:bg-neon-red/10 hover:text-neon-red transition-colors text-gray-900 dark:text-white">AD Writeups</Link>
                        </div>
                    </div>

                    <Link to="/contact" className="hover:text-neon-red transition hover:scale-105 transform">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-900 dark:text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-neon-red/20 py-4 flex flex-col items-center space-y-4 shadow-xl">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon-red transition text-lg">Home</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon-red transition text-lg">About</Link>
                    <Link to="/skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon-red transition text-lg">Skills</Link>
                    <Link to="/certifications" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon-red transition text-lg">Certs</Link>
                    <Link to="/blogs/ctf" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon-red transition text-lg">CTF Writeups</Link>
                    <Link to="/blogs/ad" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon-red transition text-lg">AD Writeups</Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon-red transition text-lg">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
