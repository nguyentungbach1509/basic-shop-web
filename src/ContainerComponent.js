import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import CheckOut from './CheckOut';
import Payment from './Payment';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';



const promise = loadStripe(

    'pk_test_51Hosx2ANgES1P2U0CcqOsiRvf17KVpDsmBRa4JG0kdE3V0H7a09TBUlkmhPUOL7jAZQe4DkNSot4SmOzy6mZKGjI00gLOVlKOE'
    
);


function ContainerComponent() {

    const[{user}, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser
                });
            }
            else {
                dispatch({
                    type: "SET_USER",
                    user: null
                });
            }
        })

        return () =>{
            unsubscribe();
        }

    }, [])

    

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <HomePage/>
                </Route>
                <Route path="/checkout">
                    <Header/>
                    <CheckOut/>
                </Route>
                <Route path="/payment">
                    <Header/>
                    <Elements stripe={promise}>
                        <Payment/>
                    </Elements>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/orders">
                    <Header/>
                    <Orders/>
                </Route>
            </Switch>
        </Router>
    )
}

export default ContainerComponent;