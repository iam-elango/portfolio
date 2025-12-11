import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
    {
        title: "Certified Red Team Professional (CRTP)",
        issuer: "Altered Security",
        date: "2025",
        image: "/src/assets/CRTP.png",
        link: "https://www.credential.net/618bdfe1-cea0-4ada-bf4f-92c20097f628#acc.Dn4ZjBRT"  // Placeholder or verify link if available
    },
    {
        title: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        date: "2025",
        image: "/src/assets/CEH.png",
        link: "https://www.eccouncil.org/verified"
    },
    {
        title: "Certified Network Security Practitioner (CNSP)",
        issuer: "The SecOps Group",
        date: "2025",
        image: "/src/assets/CNSP.png",
        link: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXZjydJO1g7NUrws2P0BcFjaoOUFZHbT/2ziNSj9SSYisgqsqZSVL5SVNjberMk0doQecy6q/SxtUQc8/rmVrBAY="
    }
];

const Certifications: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4"><span className="text-neon-red">$</span>Certifications</h2>
                <p className="text-gray-600 dark:text-gray-400">Validated skills and achievements.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(255,0,51,0.4)] transition-all duration-300 flex flex-col h-full"
                    >
                        {/* Image Area */}
                        <div className="h-48 bg-gray-100 dark:bg-gray-800 relative z-10 flex items-center justify-center overflow-hidden shrink-0">
                            {/* Fallback pattern or placeholder if image fails */}
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/1a1a1a/ff0033?text=Certificate';
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/60 dark:bg-black/60 backdrop-blur-sm">
                                <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center space-x-2 bg-neon-red text-white px-4 py-2 rounded-full font-bold hover:bg-neon-red-dark transition-colors">
                                    <Award size={18} />
                                    <span>Verify Credential</span>
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 relative z-20 bg-white dark:bg-gray-900 group-hover:bg-gray-50 dark:group-hover:bg-gray-800 transition-colors flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-neon-red transition-colors mb-4">{cert.title}</h3>
                            <div className="flex justify-between items-center mt-auto text-sm text-gray-500">
                                <span>{cert.issuer}</span>
                                <span>{cert.date}</span>
                            </div>
                        </div>

                        {/* Glow Border Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-red/50 rounded-xl pointer-events-none transition-all duration-300"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
