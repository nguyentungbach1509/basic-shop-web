import React, {useState, useEffect} from 'react';
import './Order.css';
import {useStateValue} from './StateProvider';
import {db} from './firebase';
import moment from 'moment';
import FlipMove from 'react-flip-move';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';





function Order(props) {

    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(props.order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{props.order.id}</small>
            </p>

            <FlipMove  
                appearAnimation="accordionVertical"
            >
                {props.order.data.basket?.map((item, i) => (
                    <CheckoutProduct
                       key={i}
                       {...item}
                       hideButton
                    />
                ))}   
                           
            </FlipMove>
                
            
            
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total:{value}</h3>
                )}
                
                decimalScale={2}
                value={props.order.data.amount / 100}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}
            
            />
        </div>
    )

}



export default Order;