import React, {useContext} from 'react';
import Product from './Product';
import './Products.css';
import { MyContext } from '../MyContext';


const Products = () => {
    const dataFromContext = useContext(MyContext);
    return(
        <section className="products">
        {dataFromContext.prodFilter.map((prop) => 
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
