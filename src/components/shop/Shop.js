import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';


import Product from '../Product/Products';
import './Shop.css';

const Shop = () =>{
    const[products, setProducts]= useState([]);
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handelAddToCart =(product)=>{
       const newCart =[...cart, product];
       setCart(newCart)
    }

    return(
        <div className="shop-container">
             <div className="product-container">
                   <div className="row">
                   <div className="card-group">    
                       {
                        products.map(product=> <Product 
                         key={product.key}
                         product ={product}
                         handelAddToCart={handelAddToCart}
                         >

                         </Product>)
                        }
                  </div>
                   </div>
                </div> 
                <div className="cart-container">
                        <Order cart={cart}></Order>
                </div>
        </div>
           
    )
}

export default Shop;