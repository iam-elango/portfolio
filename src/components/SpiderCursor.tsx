import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpider } from 'react-icons/fa';

const SpiderCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none text-neon-red drop-shadow-[0_0_8px_rgba(255,0,51,0.8)]"
            animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12, rotate: -35 }}
            transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
        >
            <FaSpider size={24} />
        </motion.div>
    );
};

export default SpiderCursor;
