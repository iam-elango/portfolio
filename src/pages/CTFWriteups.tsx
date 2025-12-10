import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, Search, ChevronLeft } from 'lucide-react';
import { SiHackthebox, SiTryhackme } from 'react-icons/si';

// Mock Data
const allPosts = [
    { id: 1, title: "Linux PrevEsc - Easy", date: "Oct 10, 2024", summary: "Walkthrough of a Linux machine privilege escalation.", platform: "HackTheBox" },
    { id: 2, title: "Buffer Overflow 101", date: "Sep 22, 2024", summary: "Intro to buffer overflows on Windows.", platform: "TryHackMe" },
    { id: 3, title: "Active Directory Forest", date: "Nov 05, 2024", summary: "Attacking AD forests.", platform: "HackTheBox" },
    { id: 4, title: "Web App SQLi", date: "Aug 15, 2024", summary: "Manual SQL injection exploitation.", platform: "TryHackMe" },
];

const CTFWriteups: React.FC = () => {
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = allPosts.filter(post =>
        post.platform === selectedPlatform &&
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4"><span className="text-neon-red">CTF</span> Writeups</h2>
                <p className="text-gray-600 dark:text-gray-400">Select a platform to view writeups.</p>
            </motion.div>

            <AnimatePresence mode="wait">
                {!selectedPlatform ? (
                    // Platform Selection View
                    <motion.div
                        key="selection"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col md:flex-row justify-center gap-8 items-center h-[50vh]"
                    >
                        <button
                            onClick={() => setSelectedPlatform('HackTheBox')}
                            className="w-64 h-64 bg-white/50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-neon-red hover:shadow-[0_0_30px_rgba(255,0,51,0.2)] transition-all group"
                        >
                            <SiHackthebox size={64} className="text-gray-600 dark:text-gray-500 group-hover:text-neon-red transition-colors" />
                            <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-neon-red transition-colors">HackTheBox</span>
                        </button>

                        <button
                            onClick={() => setSelectedPlatform('TryHackMe')}
                            className="w-64 h-64 bg-white/50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-neon-red hover:shadow-[0_0_30px_rgba(255,0,51,0.2)] transition-all group"
                        >
                            <SiTryhackme size={64} className="text-gray-600 dark:text-gray-500 group-hover:text-neon-red transition-colors" />
                            <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-neon-red transition-colors">TryHackMe</span>
                        </button>
                    </motion.div>
                ) : (
                    // List View
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Controls */}
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                            <button
                                onClick={() => { setSelectedPlatform(null); setSearchQuery(''); }}
                                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors self-start"
                            >
                                <ChevronLeft size={20} />
                                <span>Back to Categories</span>
                            </button>

                            <div className="relative w-full md:w-auto">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search writeups..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full md:w-64 bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-full py-2 pl-10 pr-4 text-gray-900 dark:text-white focus:border-neon-red focus:outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Posts Grid */}
                        <div className="grid gap-4">
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map(post => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors cursor-pointer group"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-neon-red transition-colors mb-2">{post.title}</h3>
                                                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.summary}</p>
                                                <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                    <Flag size={16} />
                                                    <span>{post.platform}</span>
                                                    <span>•</span>
                                                    <span>{post.date}</span>
                                                </div>
                                            </div>
                                            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-sm rounded hover:bg-neon-red transition-colors">Read More</button>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center text-gray-500 py-12">
                                    No writeups found matching your search.
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CTFWriteups;
