import React, { forwardRef } from 'react';
import './styles.css';

const AboutSection = forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
    (props, ref) => (
        <section
            id='about'
            className='about-section bg-neutral-1'
            role='banner'
            aria-labelledby='about-section'
            ref={ref}
            {...props}
        >
            <h2 id='about-section' className='text-accent'>
                About Me
            </h2>
            <p aria-describedby='about-section'>
                I’m a full-stack engineer and tech lead with 8+ years of
                experience shipping resilient systems across fintech,
                healthcare, e-commerce, and developer platforms. I work across
                the stack, with a focus on frontend architecture, clean backend
                integrations, and product-driven code.
            </p>
            <p aria-describedby='about-section'>
                With 3+ years in technical leadership roles, I care about
                creating calm, pragmatic, and sustainable engineering cultures.
                Whether I’m prototyping a 0–1 product, contributing to launches,
                or re-architecting legacy systems, I aim to bring curiosity,
                clarity, and care to both code and collaboration.
            </p>
        </section>
    )
);
export default AboutSection;
