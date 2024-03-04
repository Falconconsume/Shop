import React from 'react';
import './Categories-card.module.scss';
import Container from "../CardsContainer/CardsContainer";
import {Link} from "react-router-dom";

const CategoriesCard = ({categories}) => {
    return (
        <>
            <h2>Категорії</h2>
            <Container children={
                <>
                    {categories.map(category => (
                        <Link to={`/products/${category.id}`} className="link">
                            <div key={category.id} className="category-item">
                                <div className="content">
                                    <img src={category.image} alt={category.name}/>
                                    <h3>{category.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </>
            }/>
        </>
    );
};

export default CategoriesCard;
