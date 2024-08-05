import React from 'react';
import './Button.scss';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <div
            className="button p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;