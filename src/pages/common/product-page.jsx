import React from 'react';

const ProductPage = (props) => {
    return (
        <div>
            <h1>Hi i'm Product. My ID is {props.match.params.id}</h1>
        </div>
    );
}

export default ProductPage;