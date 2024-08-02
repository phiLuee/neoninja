import React from 'react';
import './Card.scss';

interface CardProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ onClick, children }) => {
    return (
        <div
            className="card p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;