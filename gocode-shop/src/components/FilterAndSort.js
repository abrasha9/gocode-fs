import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import './FilterAndSort.css';

const  FilterAndSort =  () => {
    
    return (
    <div>    
     <nav className="product-filter">
     
      <FilterBy/>
      <SortBy/>
     </nav>

   </div>
    )
}

export default FilterAndSort;