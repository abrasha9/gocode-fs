import React, {useState} from 'react';
import Product from './Product';
import './Products.css';




const Products = ({data}) => {
  
    return(
        
        <section className="products">
        {data.map((prop) => 
        <Product    
        key={prop.id}
        title={prop.title} 
        Image={prop.image} 
        Price={prop.price}
        />)}
         

        </section>
    )
}

export default Products;
