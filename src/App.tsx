import { useRef } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

function App() {
    const aboutSectionRef = useRef<HTMLElement | null>(null);
    const scrollToSection = () => {
        if (aboutSectionRef.current) {
            aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <HeroSection onNavigate={scrollToSection} />
            <AboutSection ref={aboutSectionRef} />
        </>
    );
}

export default App;
