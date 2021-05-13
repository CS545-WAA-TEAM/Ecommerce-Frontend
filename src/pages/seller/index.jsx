import React from 'react';
import { Route, Switch } from 'react-router';
import Orders from './orders';
import Products from './products';

const Seller = () => {
    return (
        <div>
            <Switch>
                <Route path="/seller/products" component={Products} />
                <Route path="/seller/orders" component={Orders} />
                <Route path="/"><h1>Seller Index</h1></Route>
            </Switch>
        </div>
    );
}

export default Seller;