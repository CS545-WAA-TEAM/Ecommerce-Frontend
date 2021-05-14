import React from 'react';
import ProductDetail from '../../components/Product/ProductDetail';


const ProductPage = (props) => {
    return (
        <div>
            <h1>Hi i'm Product. My ID is {props.match.params.id}</h1>
            <ProductDetail productId={props.match.params.id} />
        </div>
    );
}

export default ProductPage;