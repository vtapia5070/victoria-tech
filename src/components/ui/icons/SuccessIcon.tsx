import { type FC } from 'react';

interface SuccessIconProps {
    size?: number;
    className?: string;
}

export const SuccessIcon: FC<SuccessIconProps> = ({ size = 24, className = '' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="12"
                cy="12"
                r="11"
                fill="#10B981"
                stroke="#10B981"
                strokeWidth="2"
            />
            <path
                d="M8 12.5L10.5 15L16 9.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};