import React from 'react';
import { motion } from 'framer-motion';
import { SiHackthebox, SiTryhackme, SiMedium, SiLinkedin, SiGithub } from 'react-icons/si';

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-20 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-lg p-8 border border-gray-200 dark:border-gray-800 shadow-[0_0_15px_rgba(255,0,51,0.1)] hover:shadow-[0_0_20px_rgba(255,0,51,0.2)] transition-shadow"
            >
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white"><span className="text-neon-red">01.</span> About Me</h2>

                <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light">
                    <p>
                        Hello! I'm <span className="text-neon-red font-semibold">Elangovan</span>, a passionate Red Teamer and Cybersecurity Specialist.
                        My journey began with a curiosity for how systems work, which quickly evolved into a drive to understand how they can be broken—and fixed.
                    </p>
                    <p>
                        I specialize in <span className="text-gray-900 dark:text-white font-medium">Network Penetration Testing</span>, <span className="text-gray-900 dark:text-white font-medium">Web Application Security</span>, and <span className="text-gray-900 dark:text-white font-medium">Red Team Operations</span>.
                        My goal is to help organizations identify vulnerabilities before malicious actors do, ensuring a safer digital environment.
                    </p>
                    <p>
                        When I'm not hacking (ethically), I'm exploring new exploit techniques, contributing to the security community, or automating tasks with Python and Bash.
                    </p>
                </div>

                {/* Social Profiles Grid */}
                <div className="mt-10 flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        <a href="https://app.hackthebox.com/profile/YOUR_ID" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-neon-red transition-all">
                            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-300 dark:border-gray-700 group-hover:border-neon-red transition-all">
                                <SiHackthebox size={24} />
                            </div>
                            <span className="text-sm">HackTheBox</span>
                        </a>
                        <a href="https://tryhackme.com/p/YOUR_USERNAME" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-neon-red transition-all">
                            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-300 dark:border-gray-700 group-hover:border-neon-red transition-all">
                                <SiTryhackme size={24} />
                            </div>
                            <span className="text-sm">TryHackMe</span>
                        </a>
                        <a href="https://medium.com/@YOUR_USERNAME" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-neon-red transition-all">
                            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-300 dark:border-gray-700 group-hover:border-neon-red transition-all">
                                <SiMedium size={24} />
                            </div>
                            <span className="text-sm">Medium</span>
                        </a>
                        <a href="https://linkedin.com/in/elangovan" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-neon-red transition-all">
                            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-300 dark:border-gray-700 group-hover:border-neon-red transition-all">
                                <SiLinkedin size={24} />
                            </div>
                            <span className="text-sm">LinkedIn</span>
                        </a>
                        <a href="https://github.com/elangovan" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-neon-red transition-all">
                            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-300 dark:border-gray-700 group-hover:border-neon-red transition-all">
                                <SiGithub size={24} />
                            </div>
                            <span className="text-sm">GitHub</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
