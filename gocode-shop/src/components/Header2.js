import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import './Header2.css';
import Cart from './Cart'


const  Header2 =  () => {
    
    return (
    <div>    
     <nav className="product-filter">
      <h1>Jackets2</h1>
      <FilterBy></FilterBy>
      <SortBy></SortBy>
      <Cart/>
     </nav>

   </div>
    )
}

export default Header2;