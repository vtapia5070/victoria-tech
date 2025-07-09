import React from 'react';
import { Button } from 'twinkle-kit/core';
import { Icon } from './ui/Icon';

import './styles.css';

const AboutSection: React.FC = () => {
    return (
        <section
            className='about-section bg-primary-3'
            role='banner'
            aria-labelledby='about-heading'
        >
            <h1 id='about-heading' className='text-accent'>
                About Me
            </h1>

            <p aria-describedby='about-heading' className=''>
                Building thoughtful software and empowering the people behind
                it.
            </p>
        </section>
    );
};

export default AboutSection;
