import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // EmailJS Configuration - User needs to fill these in
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        if (SERVICE_ID === 'YOUR_SERVICE_ID') {
            setTimeout(() => {
                setStatus('success');
                alert('EmailJS is not configured. This is a simulation.');
            }, 1500);
            return;
        }

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.error("EmailJS Error:", error);
                setStatus('error');
            });
    };

    return (
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row gap-12">
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="md:w-1/2 space-y-8"
            >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white"><span className="text-neon-red">04.</span> Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    I'm currently looking for new opportunities in Red Teaming and Offensive Security.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-neon-red transition-colors cursor-pointer">
                        <Mail />
                        <span>elangovan@example.com</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-neon-red transition-colors cursor-pointer">
                        <Phone />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-neon-red transition-colors cursor-pointer">
                        <Linkedin />
                        <span>linkedin.com/in/elangovan</span>
                    </div>
                </div>

                <div className="flex space-x-4 pt-6">
                    <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-neon-red hover:text-white transition-colors text-gray-900 dark:text-white"><Github size={20} /></a>
                    <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-neon-red hover:text-white transition-colors text-gray-900 dark:text-white"><Linkedin size={20} /></a>
                    <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-neon-red hover:text-white transition-colors text-gray-900 dark:text-white"><Mail size={20} /></a>
                </div>
            </motion.div>

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="md:w-1/2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Name</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded p-3 text-gray-900 dark:text-white focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red transition-all"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded p-3 text-gray-900 dark:text-white focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red transition-all"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Message</label>
                        <textarea
                            required
                            rows={4}
                            className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded p-3 text-gray-900 dark:text-white focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red transition-all"
                            placeholder="Hello, I'd like to talk about..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-neon-red text-white font-bold py-3 rounded hover:bg-neon-red-dark transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                        {status === 'sending' ? (
                            <span>Sending...</span>
                        ) : (
                            <>
                                <Send size={18} />
                                <Send size={18} />
                                <span>Send Message</span>
                            </>
                        )}
                    </button>
                    {status === 'success' && <p className="text-green-500 text-center mt-2">Message sent successfully!</p>}
                    {status === 'error' && <p className="text-red-500 text-center mt-2">Failed to send message. Please try again.</p>}
                </form>
            </motion.div>
        </div>
    );
};

export default ContactForm;
