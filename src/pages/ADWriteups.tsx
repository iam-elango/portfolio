import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Search } from 'lucide-react';

const ADWriteups: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // Dummy data for now
    const posts = [
        { id: 1, title: "Active Directory Basics for Pentesters", date: "Nov 01, 2024", summary: "Understanding Kerberos, LDAP, and Domain Controllers." },
        { id: 2, title: "Kerberoasting Attack Guide", date: "Nov 15, 2024", summary: "How to extract and crack service account hashes." }
    ];

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4"><span className="text-neon-red">AD</span> Writeups</h2>
                <p className="text-gray-600 dark:text-gray-400">Active Directory exploitation and hardening guides.</p>

                {/* Search Box */}
                <div className="mt-8 relative max-w-md mx-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search AD writeups..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-full py-2 pl-10 pr-4 text-gray-900 dark:text-white focus:border-neon-red focus:outline-none transition-all"
                    />
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
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
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 py-12">
                        No writeups found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ADWriteups;
