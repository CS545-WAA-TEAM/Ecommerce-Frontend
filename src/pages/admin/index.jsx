import React from 'react';
import { Route, Switch } from 'react-router';
import Reviews from './reviews';
import Sellers from './sellers';

const Admin = () => {
    return (
            <Switch>
                <Route path="/admin/reviews" component={Reviews}/>
                <Route path="/admin/sellers" component={Sellers}/>
                <Route path="/"><h1>Admin Index</h1></Route>
            </Switch>
    );
}

export default Admin;
