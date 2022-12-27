import React from 'react';
import Product from './Product';
import './Products.css';

// <select>
// {options.map( (option2,index) => <option key={index} value="/">{option2}</option>)}
// </select> 

/* <Product title={"firts jacekt"}/>   
         <Product title={"second jacekt"}/>   
         <Product title={"last jacekt"}/>   
         <Product title={"last jacekt"}/>               
         <Product title={"last jacekt"}/>   
         <Product title={"last jacekt"}/>   
         <Product title={"last jacekt"}/>   
         <Product title={"last jacekt"}/>    */

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
