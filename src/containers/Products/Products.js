import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../components/Product/Product'
import { Link, Route } from 'react-router-dom';




const Products = (props) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState();




    const config = {
        method: 'get',
        url: 'http://localhost:8080/products',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    };


    function fetchProducts() {
        setLoading(true);
        setError(null);
        axios(config)
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

    useEffect(() => {
        fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const prds = products.map(product => {
        return <Link to={'products' + '/' + product.id} key={product.id}>
            <Product
                key={product.id}
                name={product.name}
                description={product.description}
                id={product.id} />
        </Link>

    });

    let content = prds
    if (products.length > 0) {
        content = prds;
    }
    else if (error) {
        content = <p>{error}</p>;
    }
    else if (isLoading) {
        content = <p> Loading ... </p>;
    }

    return (
        <div>{content}</div>

    );

}

export default Products;