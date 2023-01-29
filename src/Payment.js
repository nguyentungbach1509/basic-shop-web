import React, { useState, useEffect } from 'react';
import './Payment.css';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer';
import FlipMove from 'react-flip-move';
import CheckoutProduct from './CheckoutProduct';
import {Link, useHistory} from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import instance from './axios';
import {db} from './firebase';


const ticketNotVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1
};


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {

        const getClientSecret = async () => {
            const response = await instance({
                method: "POST",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();

    }, [basket]);

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement) 
            }
        }).then(({paymentIntent}) => {

            db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created 
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace("/orders");
        })
    }


    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }   

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (
                        <Link to="/checkout">
                            {basket?.length} items
                        </Link>
                    )
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>8 Fire Tower</p>
                        <p>Hamilton, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        <FlipMove  
                            appearAnimation="accordionVertical"
                            enterAnimation={{
                                from: ticketNotVisibleState,
                                to: {}
                            }}
                            leaveAnimation={{
                                from: {},
                                to: ticketNotVisibleState
                            }}
                        >
                            {basket.map((product, i) => (
                                <CheckoutProduct
                                    key={i}
                                    {...product}
                                />
                            ))}
                        </FlipMove>
                    </div>

                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <p>Order Total: <span className="payment__priceValue">{value}</span></p>
                                    )}
                                    
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={"$"}
                                
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                                {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    )

}


export default Payment;