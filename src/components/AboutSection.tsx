import React from 'react';

import './styles.css';

const AboutSection: React.FC = () => {
    return (
        <section
            className='about-section bg-neutral-1'
            role='banner'
            aria-labelledby='about-section'
        >
            <h2 id='about-section' className='text-accent'>
                About Me
            </h2>

            <p aria-describedby='about-section' className=''>
                I’m a full-stack engineer and tech lead with 8+ years of
                experience shipping resilient systems across fintech,
                healthcare, e-commerce, and developer platforms, and 3+ years in
                technical leadership roles. I work across the stack, with a
                focus on frontend architecture, clean backend integrations, and
                product-driven code.
            </p>
            <p aria-describedby='about-section' className=''>
                I care deeply about creating calm, high-functioning engineering
                cultures. Whether I’m prototyping a 0–1 product, contributing to
                launches, or re-architecting legacy systems, I aim to bring
                curiosity, clarity, and care to both code and collaboration.
            </p>
        </section>
    );
};

export default AboutSection;
