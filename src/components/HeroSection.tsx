import React from 'react';
import { Button } from 'twinkle-kit/core';
import { Icon } from './ui/Icon';

import './styles.css';

const HeroSection: React.FC = () => {
    const showButtons = false;
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
            <h1 id='hero-heading'>
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

            {showButtons && (
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
            )}
            <div
                className='social-links'
                role='group'
                aria-label='Social links'
            >
                <a
                    href='https://github.com/vtapia5070'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon name='github' fill='#943cdd' size={32} />
                </a>
                <a
                    href='https://www.linkedin.com/in/victoriatapia1/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon name='linkedin' fill='#943cdd' size={32} />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
