import React from 'react';
import { Link } from 'react-router-dom';
import './Categories-list.css';

const CategoryList = ({categories}) => {
    return (
        <div className="category-list-container">
            <div className="category-list-top-bar"></div>
            <ul className="category-list">
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/products/${category.id}`} className="link">{category.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="category-list-bottom-bar"></div>
        </div>
    );
};

export default CategoryList;