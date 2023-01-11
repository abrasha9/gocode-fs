import React, {useState,useEffect} from 'react'
import Product from '../../components/Product';
import { useLocation } from 'react-router-dom';
import Cart from '../../components/Cart';
import './ProductId.css';
 

const ProductId = () => {
    const [localProd,setLocalProd]=useState([]);
    const Location = useLocation();
    const getProducts = async function () {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${Location.state}`);
          const answer = await response.json();
          setLocalProd(answer);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect ( ()=>{
        getProducts();
     })

  return (
    <div className='prodId'>
        <Cart/>
        <p>this is the product:</p>
        <Product
        key={localProd.id}
        id={localProd.id}
        title={localProd.title} 
        Image={localProd.image} 
        Price={localProd.price}
        />
        </div>
  )
}

export default ProductId;