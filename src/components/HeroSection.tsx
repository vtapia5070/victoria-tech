import React from 'react';
import { Button } from 'twinkle-kit/core';
import { Icon } from './ui/Icon';

import './styles.css';

interface Props {
    onNavigate: () => void;
}

const HeroSection: React.FC<Props> = ({ onNavigate }) => {
    const showButtons = false;

    return (
        <section
            className='hero-section bg-primary-3'
            role='banner'
            aria-labelledby='hero-heading'
        >
            <h1 id='hero-heading' className='text-accent'>
                <span>I'm, </span>
                <span>Victoria.</span>
            </h1>

            <p aria-describedby='hero-heading' className=''>
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
                <Button onClick={onNavigate} className='cta-button'>
                    Learn More About Me
                </Button>
                {showButtons && (
                    <Button onClick={() => {}} className='cta-button secondary'>
                        Get in Touch
                    </Button>
                )}
            </div>
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
