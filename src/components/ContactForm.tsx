import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Linkedin, Github } from 'lucide-react';
// emailjs import removed

// emailjs import removed

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "2fd261a3-a274-4e15-aaa0-9c4b4a781b45",
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error("Web3Forms Error:", result);
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row gap-12">
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="md:w-1/2 space-y-8"
            >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white"><span className="text-neon-red">$</span>Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    I'm currently looking for new opportunities in Red Teaming and Offensive Security.
                    Whether you have a question or just want to say hi, I'll get back to you!
                </p>

                <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-neon-red transition-colors cursor-pointer">
                        <Mail />
                        <span>elangovansanthalingam@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-neon-red transition-colors cursor-pointer">
                        <Phone />
                        <span>+91 89733 44303</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-neon-red transition-colors cursor-pointer">
                        <Linkedin />
                        <span>https://www.linkedin.com/in/iamelango/</span>
                    </div>
                </div>

                <div className="flex space-x-4 pt-6">
                    <a href="https://github.com/iam-elango" target="_blank" rel="noreferrer" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-neon-red hover:text-white transition-colors text-gray-900 dark:text-white"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/iamelango/" target="_blank" rel="noreferrer" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-neon-red hover:text-white transition-colors text-gray-900 dark:text-white"><Linkedin size={20} /></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=elangovansanthalingam@gmail.com" target="_blank" rel="noreferrer" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-neon-red hover:text-white transition-colors text-gray-900 dark:text-white"><Mail size={20} /></a>
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
                                <span>Send Message</span>
                                <Send size={18} />
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
