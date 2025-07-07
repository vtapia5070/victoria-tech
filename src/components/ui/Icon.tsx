import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: 'github' | 'linkedin';
    fill?: string;
    size?: number;
}

const icons = {
    github: (
        <svg
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z' />
        </svg>
    ),
    linkedin: (
        <svg
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M20.452 20.452H17.21V14.8c0-1.345-.024-3.077-1.877-3.077-1.879 0-2.167 1.464-2.167 2.974v5.755H9.921V9h3.112v1.561h.045c.433-.82 1.494-1.683 3.073-1.683 3.285 0 3.89 2.162 3.89 4.974v6.6zM5.337 7.433a1.805 1.805 0 1 1 0-3.609 1.805 1.805 0 0 1 0 3.609zM6.797 20.452H3.878V9h2.919zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.206 24 24 23.225 24 22.271V1.729C24 .774 23.206 0 22.225 0z' />
        </svg>
    ),
};

const Icon: React.FC<IconProps> = ({
    name,
    fill = 'currentColor',
    size = 24,
    ...props
}) => {
    return (
        <span
            style={{
                display: 'inline-flex',
                verticalAlign: 'middle',
                lineHeight: 0,
            }}
        >
            {React.cloneElement(icons[name], {
                width: size,
                height: size,
                fill,
                ...props,
            })}
        </span>
    );
};

export { Icon };
