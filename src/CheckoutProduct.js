import React, {useEffect, useState, forwardRef} from 'react';
import './CheckoutProduct.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import {useStateValue} from './StateProvider';



const CheckoutProduct = forwardRef((props, ref) =>{
    const [{basket}, dispatch] = useStateValue();


    const removeProduct = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id
        })
    }

    return (
        <div ref={ref} className="checkoutProduct">
            <img className="checkoutProduct__img" src={props.img}/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{props.title}</p>
               
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                
                <div className="checkoutProduct__rating">
                    {Array(props.rating).fill().map((_, i) => (
                            <StarRateIcon key={i} style={{ color: "#fdcc0d" }}/>
            
                        ))}
                </div>
                   
            {!props.hideButton && (<button onClick={removeProduct}>Remove from basket</button>)}
            
            </div>
            
        </div>
    )
    
})

export default CheckoutProduct;