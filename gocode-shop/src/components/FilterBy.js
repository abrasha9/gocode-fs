import React from "react";
import {prodArr} from './Data';


const FilterBy = ({setProdFilter,categories}) =>{

    const filterChange =(cat1) =>{ 
        const temparr = prodArr.filter ((el) => el.category === cat1)
        if (cat1 === 'ALL'){
            setProdFilter(prodArr)
        }else {
        setProdFilter(temparr);        
    }}


    const labelName = "Filter By israel: "

    return (
        <div className="sort">
        <div className="collection-sort">
           <label>{labelName}</label> 
           <select defaultValue={'ALL'} onChange={(e)=>filterChange(e.target.value)}>
            {categories.map((option2,index) => <option key={index} value={option2}>{option2}</option>)}
           </select> 
        </div>
        </div>
        

    )
}   

export default FilterBy;