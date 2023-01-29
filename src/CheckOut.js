import React, {useEffect, useState, forwardRef } from 'react';
import './CheckOut.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';

const ticketNotVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1
};


function CheckOut(props){

    const [{basket, user}] = useStateValue();
    

    return (
        <div className="checkout">
            
        
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
                {!user ? 
                    <h3 className="checkout__greeting">Hello, <span>guest</span></h3> : <h3 className="checkout__greeting">Hello, <span>{user.email}</span></h3>
                }
                <h2 className="checkout__title">Your Shopping Basket</h2>
                
                <div>
                   
                    {
                        basket?.length === 0 ? 
                        <div style={{marginTop:"20px"}}> 
                            <p>Your Shopping Basket is empty</p>
                            <p>
                                You have no items in your basket. To buy one or more items, click
                                "Add to basket" next to the item 
                            </p>
                        </div>

                        :

                        <div>
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
                    }
                </div>
            </div>

            <div className="checkout__right">
                    <Subtotal/>
            </div>
                        
        </div>

    )

}


export default CheckOut;