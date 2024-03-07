import React from 'react';
import './Categories-card.scss';
import { Link } from "react-router-dom";

const CategoriesCard = ({ categories }) => {
    return (
        <div className="container">
            <h2>Категорії</h2>
            <div className="categories-grid">
                {categories.map(category => (
                    <Link key={category.id} to={`/${category.id}`}>
                        <div className="category-item">
                            <div className="content">
                                <img src={category.image} alt={category.id}/>
                                <h3>{category.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoriesCard;
