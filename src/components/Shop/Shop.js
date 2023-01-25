import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    
   const products = useLoaderData()
    const [cart, setCart] = useState([])
    const clearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }

   useEffect( ()=>{
    const storedCart = getStoredCart();
    const savedCart = []
    // console.log(storedCart)
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
         const quantity = storedCart[id]
         addedProduct.quantity = quantity
         savedCart.push(addedProduct)
        }
        // console.log(addedProduct)
    }
    setCart(savedCart)


   },[products])
    const handleAddToCart = (selectedProduct) =>{
        let newCart = []
       const exists = cart.find(product => product.id === selectedProduct.id)
       if(!exists){
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct]

       }
       else{
        const rest = cart.filter(product => product.id !== selectedProduct.id)
        exists.quantity = exists.quantity + 1
        newCart = [...rest, exists]
       }

        newCart = [...cart, selectedProduct]
       setCart(newCart)
       addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
           <div className="products-container">
            {
                products.map(product => <Product key={product.id}
                product={product} handleAddToCart={handleAddToCart}></Product>)
            }
           </div>
           <div className="cart-container">
              <Cart cart={cart} clearCart={clearCart}></Cart>
              <Link to='/order'>
                <button>Review Order</button>
              </Link>
            </div> 
        </div>
    );
};

export default Shop;