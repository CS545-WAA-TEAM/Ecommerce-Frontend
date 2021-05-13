import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../components/Product/Product'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const Products = (props) => {

    const [products, setProducts] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState();

    const classes = useStyles();


    var config = {
        method: 'get',
        url: 'localhost:8080/products',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    };


    function fetchProducts() {
        const sampleProduct = [
            {
                "createdDate": 1620860250445,
                "modifiedDate": 1620860250446,
                "id": 7,
                "name": "Test",
                "description": "Test ",
                "price": 4.0
            },
            {
                "createdDate": 1620860250445,
                "modifiedDate": 1620860250446,
                "id": 8,
                "name": "Teaast",
                "description": "Test ",
                "price": 4.0
            }

        ]

        setProducts(sampleProduct);
        // setLoading(true);
        // setError(null);
        // axios(config)
        //     .then(function (response) {
        //         setProducts(response.data)
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         setLoading(false)
        //         setError(error.message);
        //     });

    }

    useEffect(fetchProducts, []);

    const productSelectedHandler = (id) => {
        setSelectedId(id);
    }

    const prds = products.map(product => {
        return (
            <Product
                name={product.name}
                description={product.description}
                clicked={() => { productSelectedHandler(product.id) }}
                id={product.id} />
        )

    });

    let content = prds
    // if (products.length > 0) {
    //     content = prds;
    // }
    // else if (error) {
    //     content = <p>{error}</p>;
    // }
    // else if (isLoading) {
    //     content = <p> Loading ... </p>;
    // }

    return (
        <div>{content}</div>

    );

}

export default Products;