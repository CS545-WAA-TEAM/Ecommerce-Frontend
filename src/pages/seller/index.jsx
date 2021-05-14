import React from 'react';
import { Route, Switch } from 'react-router';
import Orders from './orders';
import Products from './products';
import SellerComponent from '../../components/Seller/SellerComponent'
import SellerDashboard from '../../containers/Seller/SellerDashboard';

const SellerP = () => {
    return (
        <div>
            <SellerDashboard/>
        </div>
    );
}

export default SellerP;