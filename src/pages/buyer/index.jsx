import React from 'react';
import { Route, Switch } from 'react-router';
import Orders from './orders';

const Buyer = () => {
    return (
        <div>
            <Switch>
                <Route path="/buyer/orders" component={Orders}/>
                <Route path="/"><h1>Buyer Index</h1></Route>
            </Switch>
        </div>
    );
}

export default Buyer;