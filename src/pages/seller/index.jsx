import React from 'react';
import { Route, Switch } from 'react-router';
import Orders from './orders';
import Products from './products';
import SellerComponent from '../../components/Seller/Seller'

const Seller = () => {
    return (
        <div>
            <Switch>
                <Route path="/seller/products" component={Products} />
                <Route path="/seller/orders" component={Orders} />
                <Route path="/"><SellerComponent /></Route>
            </Switch>
        </div>
    );
}

export default Seller;