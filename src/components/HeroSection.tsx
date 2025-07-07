import React from 'react';
import { Button } from 'twinkle-kit/core';

import './styles.css';

const HeroSection: React.FC = () => {
    const handleLearnMore = () => {
        // TODO: Implement learn more functionality
        console.log('Learn More About Me clicked');
    };

    const handleGetInTouch = () => {
        // TODO: Implement get in touch functionality
        console.log('Get in Touch clicked');
    };

    return (
        <section
            className='hero-section bg-primary-3'
            role='banner'
            aria-labelledby='hero-heading'
        >
            <h1
                id='hero-heading'
                style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    lineHeight: '1.2',
                }}
            >
                <span>I'm, </span>
                <span className='text-accent'>Victoria</span>
            </h1>

            <p
                style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                    fontWeight: '500',
                    marginBottom: '1.5rem',
                    maxWidth: '600px',
                }}
                aria-describedby='hero-heading'
            >
                Building thoughtful software and empowering the people behind
                it.
            </p>

            <div
                style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    margin: '2rem 0',
                }}
                role='group'
                aria-label='Call to action buttons'
            >
                <Button onClick={handleLearnMore} className='cta-button'>
                    Learn More About Me
                </Button>

                <Button
                    onClick={handleGetInTouch}
                    className='cta-button secondary'
                >
                    Get in Touch
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
