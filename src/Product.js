import React, {useState, useEffect} from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product(props) {

    const[{basket}, dispatch] = useStateValue();


    const addProduct = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                title: props.title,
                price: props.price,
                rating: props.rating,
                img: props.img
            }
        })
    }


    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>

                <div className="product__rating">
                    {
                        Array(props.rating).fill().map((_, i) => (
                            <StarRateIcon key={i} style={{ color: "#fdcc0d" }}/>
                        ))
                    }
                </div>
            </div>
            
            <img src={props.img}/>
            <button onClick={addProduct}>Add to basket</button>
        </div>
    )
}


export default Product;