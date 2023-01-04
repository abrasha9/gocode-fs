import React, {useContext} from 'react';
import Product from './Product';
import './Products.css';
import { MyContext } from '../MyContext';
import ProdArr from './Data';



const Products = () => {
    const dataFromContext = useContext(MyContext);

    return(
        <section className="products">
        {dataFromContext.isLoading &&
         dataFromContext.prodFilter.map((prop) => <ProdArr key={prop.id}/>)}
        {!dataFromContext.isLoading && 
        dataFromContext.prodFilter.map((prop) => 
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
