import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [history, setHistory] = useState<string[]>([
        'Welcome to Elangovan\'s Terminal v1.0',
        'Type "help" to see available commands.'
    ]);
    const [input, setInput] = useState('');

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen, history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, `$ ${cmd}`];

        switch (trimmedCmd) {
            case 'help':
                setHistory([
                    ...newHistory,
                    'Available commands:',
                    '  help    - Show this help message',
                    '  about   - Who am I?',
                    '  skills  - My technical arsenal',
                    '  certs   - Validated credentials',
                    '  contact - How to reach me',
                    '  clear   - Clear terminal screen',
                    '  exit    - Close terminal'
                ]);
                break;
            case 'about':
                setHistory([
                    ...newHistory,
                    'I am Elangovan, a Red Teamer and Cybersecurity Specialist.',
                    'Passionate about Network Penetration Testing, Web App Security, and Breaking Things (Ethically).'
                ]);
                break;
            case 'skills':
                setHistory([
                    ...newHistory,
                    'CORE: Penetration Testing, Network Security, Web App Security',
                    'TOOLS: Python, Kali Linux, Burp Suite, Wireshark, Metasploit',
                    'DEV: React, TypeScript, Docker'
                ]);
                break;
            case 'certs':
                setHistory([
                    ...newHistory,
                    '- CEH (Certified Ethical Hacker)',
                    '- OSCP (Offensive Security Certified Professional)',
                    '- CompTIA Security+'
                ]);
                break;
            case 'contact':
                setHistory([
                    ...newHistory,
                    'Email: elangovan@example.com',
                    'Phone: +91 98765 43210',
                    'LinkedIn: linkedin.com/in/elangovan'
                ]);
                break;
            case 'clear':
                setHistory([]);
                break;
            case 'exit':
                setHistory([]);
                onClose();
                break;
            case '':
                setHistory(newHistory);
                break;
            default:
                setHistory([...newHistory, `Command not found: ${cmd}. Type "help" for valid commands.`]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) onClose();
                    }}
                >
                    <div className="w-full max-w-4xl h-[80vh] bg-terminal-black border border-terminal-green/50 rounded shadow-[0_0_50px_rgba(0,255,0,0.2)] flex flex-col overflow-hidden font-mono text-terminal-green">
                        {/* Header */}
                        <div className="bg-gray-900 border-b border-gray-800 p-2 flex justify-between items-center select-none">
                            <div className="flex space-x-2">
                                <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></button>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-sm opacity-50">root@elangovan: ~</div>
                            <div className="w-3"></div> {/* Spacer for balance */}
                        </div>

                        {/* Body */}
                        <div
                            className="flex-1 p-4 overflow-y-auto scrollbar-hide space-y-1 font-mono text-sm md:text-base"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((line, i) => (
                                <div key={i} className="whitespace-pre-wrap">{line}</div>
                            ))}
                            <div className="flex">
                                <span className="mr-2 text-neon-red font-bold">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent outline-none text-terminal-green border-none focus:ring-0 p-0"
                                    autoFocus
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                            </div>
                            <div ref={(el) => el?.scrollIntoView({ behavior: 'smooth' })}></div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Terminal;
