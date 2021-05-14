import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartProducts from '../ShoppingCartProducts/ShoppingCartProducts';
import Addresses from '../Addresses/Addresses';
import { Button } from '@material-ui/core';
import api from '../../configuration/api'
import { authenticationService } from '../../services/authentication.service';

export const ShoppingContext = React.createContext({});

const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


const ShoppingCart = () => {

    const [orderAddress, setOrderAddress] = useState({
        shipping: null,
        billing: null
    })

    const [checkout, setCheckout] = useState(false);
    // const [newAddressForm, setNewAddressForm] = useState(false);
    // const [newAddressSameBilling, setNewAddressSameBilling] = useState(true);

    const order = () => {
        api.post("buyers/"+authenticationService.currentUserValue.userId+"/shoppingcart/process",{shippingAddress: orderAddress.shipping, billingAddress: orderAddress.billing})
        .then((response) => {
            
        })
        // console.log(orderAddress);
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ShoppingContext.Provider value={{orderAddress, setOrderAddress,checkout, setCheckout}}>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography className={classes.heading}>Products in Shopping Cart</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ShoppingCartProducts />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Addresses</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Addresses />
                    </AccordionDetails>
                </Accordion>
                {checkout === true ? <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Checkout</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Button onClick={order}>Checkout</Button>
                    </AccordionDetails>
                </Accordion> : <div></div>}
            </ShoppingContext.Provider>
        </div>
    );
}
export default ShoppingCart;
