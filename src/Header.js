import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';


function Header() {

    const[{basket, user}] = useStateValue();

    const login = () => {
        if(user){
            auth.signOut();
        }
    }


    return (
        <nav className="header">
            
            <Link exact="true" to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            <div className="header__nav">
                <Link to={user ? "/" : "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello, {user ? user.email : "guest"}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>


                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <span className="header__optionLineOne">
                            <ShoppingBasketIcon/>
                        </span>
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>

            </div>   
        </nav>
    )

}


export default Header;