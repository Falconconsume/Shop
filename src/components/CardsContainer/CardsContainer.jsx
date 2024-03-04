import React from 'react';
import './Container.scss';

const CardsContainer = ({ content }) => {
    return (
        <div className="container">
            {content}
        </div>
    );
};

export default CardsContainer;
