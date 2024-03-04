import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from "../../components/Product-card/Product-card";
import Container from "../../components/CardsContainer/CardsContainer";
import categories from "../../data/categories_data";


const ProductsPage = ({ products }) => {
    const { categoryId } = useParams();

    const filteredProducts = categoryId
        ? products.filter(product => product.categoryId === categoryId)
        : products;
    const categoryName = categoryId
        ? categories.find(category => category.id === categoryId)?.name
        : "Всі категорії";

    return (
        <div>
            <h2>{categoryName}</h2>
            <div className="product-list">
                <Container children={
                    <>
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} name={product.name} price={product.price} img={product.img}/>
                        ))}
                    </>
                }/>
            </div>
        </div>
    );
};

export default ProductsPage;
