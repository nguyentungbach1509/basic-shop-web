import React, {useEffect, useState} from 'react';
import './Home.css';
import Product from './Product';


function HomePage() {

    

    return (
    
        <div className="home">
            <img
                className="home__img"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
           
            <div className="home__row">
                <Product 
                    id="123455"
                    title="NIKE AIR VAPOR ACE 724868-102"
                    price={85.86}
                    rating={5}
                    img="https://bizweb.dktcdn.net/100/301/382/files/724868-102-e.jpg?v=1585021331529"
                />

                <Product 
                    id="123456"
                    title="NIKE AIR ZOOM RESISTANCE 918194-102"
                    price={101.78}
                    rating={5}
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCaZm48MG-Gjcxi-zNl3YhWF7tW1UUVngimg&usqp=CAU"
                />
            
            </div>

             <div className="home__row">
                <Product 
                    id="123457"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={4.91}
                    rating={5}
                    img="https://books.google.com/books/content/images/frontcover/DSxjDwAAQBAJ?fife=w200-h300"
                />

                <Product 
                    id="123458"
                    title="Sony PlayStation 5"
                    price={629.99}
                    rating={5}
                    img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQI9Jga2DGAJQrjB-Hgr3q0n1lVG94A1ROObfwRl9q2CfRlypcZMQ&usqp=CAc"
                />

                <Product 
                    id="123459"
                    title="Sony PlayStation 4 Slim"
                    price={379.99}
                    rating={5}
                    img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkwZ-Fh-qiRLCzsWo19kP8IqJJFATqGYYM2oUUHOBKNptelhGLtA&usqp=CAc"
                />
            
            </div>

             <div className="home__row">
                <Product 
                    id="123460"
                    title="Sony 75' 4K UHD HDR LED Android Smart TV (XBR75X950H)"
                    price={2999.99}
                    rating={4}
                    img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5947/5947110_sd.jpg"
                />

              
            
            </div>            
        </div>

       
    )
}



export default HomePage;