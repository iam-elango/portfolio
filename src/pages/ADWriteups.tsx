import React from 'react';
import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

const ADWriteups: React.FC = () => {
    // Dummy data for now
    const posts = [
        { id: 1, title: "Active Directory Basics for Pentesters", date: "Nov 01, 2024", summary: "Understanding Kerberos, LDAP, and Domain Controllers." },
        { id: 2, title: "Kerberoasting Attack Guide", date: "Nov 15, 2024", summary: "How to extract and crack service account hashes." }
    ];

    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4"><span className="text-neon-red">AD</span> Writeups</h2>
                <p className="text-gray-600 dark:text-gray-400">Active Directory exploitation and hardening guides.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {posts.map(post => (
                    <motion.div
                        key={post.id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-neon-red transition-colors cursor-pointer"
                    >
                        <div className="flex items-center space-x-2 text-neon-red mb-2">
                            <Server size={20} />
                            <span className="text-sm border border-neon-red/30 px-2 rounded">{post.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{post.summary}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ADWriteups;
