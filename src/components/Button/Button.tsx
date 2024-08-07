import React from 'react';
import './Button.scss';
import clsx from 'clsx';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', onClick, children }) => {
    const baseStyles = "button p-4 m-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300";
    const variantStyles = {
        primary: 'bg-blue-500 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    };
    const sizeStyles = {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
    };

    const classes = clsx(baseStyles, variantStyles[variant], sizeStyles[size]);
    return (
        <div
            className={classes}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;