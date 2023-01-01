import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import './Header2.css';

const  Header2 = ({setProdFilter,categories} ) => {
    
    return (
    <div>    
     <nav className="product-filter">
      <h1>Jackets2</h1>
      <FilterBy setProdFilter={setProdFilter} categories={categories}></FilterBy>
      <SortBy></SortBy>
     </nav>

   </div>
    )
}

export default Header2;