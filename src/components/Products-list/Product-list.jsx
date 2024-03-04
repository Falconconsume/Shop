import React from 'react';
import './Product-list.module.scss';
import '../../data/categories_data';
import ProductCard from "../Product-card/Product-card";

const ProductList = ({products}) => {
    return (
        <div>
            <div className={"products-grid"}>
                {products.map(product => (
                    <ProductCard key={product.id} name={product.name} price={product.price} img={product.img} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;