import React from 'react';
import { Button } from 'twinkle-kit';

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
            className='hero-section'
            role='banner'
            aria-labelledby='hero-heading'
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '100vh',
                padding: '2rem',
                maxWidth: '800px',
                margin: '0 auto',
            }}
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
                Victoria Tapia
            </h1>

            <p
                style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                    fontWeight: '500',
                    marginBottom: '1.5rem',
                    color: '#666',
                }}
                aria-describedby='hero-heading'
            >
                Full-Stack Developer & Tech Innovator
            </p>

            <p
                style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    lineHeight: '1.6',
                    marginBottom: '2.5rem',
                    maxWidth: '600px',
                    color: '#555',
                }}
            >
                Passionate about creating innovative web solutions and building
                scalable applications that make a difference. Let's build
                something amazing together.
            </p>

            <div
                style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
                role='group'
                aria-label='Call to action buttons'
            >
                <Button
                    onClick={handleLearnMore}
                    className='cta-button primary'
                >
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
