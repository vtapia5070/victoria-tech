import { type FC, useEffect, useRef, useState } from 'react';
import './styles.css';

export const TitleFlip: FC = () => {
    const words = ['Builder', 'Leader', 'Mentor', 'Learner', 'Human'];
    const [index, setIndex] = useState(0);
    const [flipping, setFlipping] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setFlipping(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setFlipping(false);
            }, 600); // match animation duration
        }, 2000);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [index]);

    return (
        <h2 className={`flip${flipping ? ' flipping' : ''}`}>{words[index]}</h2>
    );
};
