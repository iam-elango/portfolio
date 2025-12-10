import React from 'react';
import AboutComponent from '../components/About';

const About: React.FC = () => {
    return (
        <div className="h-screen overflow-hidden pt-20 flex items-center justify-center">
            <AboutComponent />
        </div>
    );
};

export default About;
