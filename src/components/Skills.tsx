import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaBug, FaShieldAlt, FaLock, FaUserSecret } from 'react-icons/fa';

const skills = [
    { name: "Red Team Operations", icon: <FaUserSecret />, category: "Core" },
    { name: "Penetration Testing", icon: <FaBug />, category: "Core" },
    { name: "Network Security", icon: <FaNetworkWired />, category: "Core" },
    { name: "Web App Security", icon: <FaShieldAlt />, category: "Core" },
    { name: "Infrastructure Security", icon: <FaLock />, category: "Core" },

];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-20 pb-32">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4"><span className="text-neon-red">$</span>Skills & Arsenal</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                    My technical toolkit and areas of expertise.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.05, borderColor: '#ff0033', boxShadow: '0 0 15px rgba(255,0,51,0.3)' }}
                        className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 rounded-lg flex flex-col items-center justify-center gap-4 transition-all group"
                    >
                        <div className="text-4xl text-gray-600 dark:text-gray-500 group-hover:text-neon-red transition-colors duration-300">
                            {skill.icon}
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-neon-red transition-colors">{skill.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
