import React, { useState, useEffect } from 'react';
import api from '../../configuration/api';
import ShoppingCartProduct from '../../components/ShoppingCartProduct/ShoppingCartProduct'
import { authenticationService } from '../../services/authentication.service';

const ShoppingCartProducts = (props) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState();

    function fetchProducts() {
        setLoading(true);
        setError(null);
        api.get('buyers/'+authenticationService.currentUserValue.userId+'/shoppingcart')
            .then(function (response) {
                setProducts(response.data)
                // console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                // console.log(error);
                setLoading(false)
                setError(error.message);
            });

    }

    useEffect(()=>{
        fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateShoppingCart = (prods) => {
        api.patch('/buyers/'+authenticationService.currentUserValue.userId+'/shoppingcart',prods)
            .then(function (response) {
                setProducts(response.data)
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
                setError(error.message);
            });
    }
    const handleDelete = (id) => {
        updateShoppingCart(products.filter(product => product.id !== id))
    }

    const prds = products.map(product => {
        return (
            <ShoppingCartProduct 
            key={product.id} 
            name={product.name} 
            description={product.description}
            price={product.price}
            clickHandler={()=>{handleDelete(product.id)}}
            />
        )

    });

    let content = prds
    if (products.length > 0) {
        content = prds;
    }
    else if (error) {
        content = <p>{error}</p>;
    }
    else if (isLoading) {
        content = <p> Empty Cart...</p>;
    }

    return (
        <div>{content}</div>

    );

}

export default ShoppingCartProducts;