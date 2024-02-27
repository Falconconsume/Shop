import React from 'react';
import './Green-btn.scss';

const CustomButton = ({content}) => {
    return (
        <button className="custom-button">{content}</button>
    );
};

export default CustomButton;
