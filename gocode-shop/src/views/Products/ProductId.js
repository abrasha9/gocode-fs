import React, {useState,useEffect} from 'react'
import Product from '../../components/Product';
import { useParams } from 'react-router-dom';
import './ProductId.css';
 

const ProductId = () => {
    const [localProd,setLocalProd]=useState([]);
    const params = useParams();
    const getProducts = async function () {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
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