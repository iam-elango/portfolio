import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Link removed
import profileImg from '../assets/profile.jpg';

const Home: React.FC = () => {
    const [text, setText] = useState('');
    const fullText = "I am Elangovan — Jr Red Teamer";
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const isFull = text === fullText;

            if (isFull) {
                return;
            }

            setText(fullText.substring(0, text.length + 1));
            setTypingSpeed(100);
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, typingSpeed]);

    return (
        <div className="min-h-screen pt-16 flex items-center justify-center p-4">
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Text */}
                <div className="text-center md:text-left space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-mono text-gray-900 dark:text-white">
                        <span className="text-neon-red">{'>'}</span> {text}
                        <span className="animate-pulse">|</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                        Security Researcher | Penetration Tester | Ethical Hacker
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 pt-4">
                        <a
                            href="https://docs.google.com/document/d/1RhYQbvUe7X_mJOX9749WRrW3FhMo3aev/export?format=pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 bg-neon-red text-white font-bold rounded shadow-neon hover:bg-neon-red-dark hover:shadow-neon-hover transition-all transform hover:-translate-y-1 block md:inline-block text-center"
                        >
                            Download Resume
                        </a>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-3 border border-neon-red text-neon-red font-bold rounded hover:bg-neon-red/10 transition-all"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center md:justify-end relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-neon-red rounded-full opacity-20 blur-3xl animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-4 border-neon-red/50 shadow-neon overflow-hidden flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                            {/* Placeholder for user image */}
                            <img
                                src={profileImg}
                                alt="Elangovan"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/000000/ff0033?text=Profile';
                                }}
                            />
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border border-dashed border-neon-red/30 rounded-full"
                    />
                </div>
            </div>
        </div>

    );
};

export default Home;
