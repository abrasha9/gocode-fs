import React from "react";
import {useContext} from "react";
import { MyContext } from "../MyContext";

const FilterBy = () =>{
    
    const dataFromContext = useContext(MyContext);

    const filterChange =(cat1) =>{ 
        const temparr = dataFromContext.prodCat.filter ((el) => el.category === cat1)
        if (cat1 === 'ALL'){
            dataFromContext.setProdFilter(dataFromContext.prodFilter)
        }else {
            dataFromContext.setProdFilter(temparr);        
    }}

    const labelName = "Filter By israel: "

    return (
        <div className="sort">
        <div className="collection-sort">
           <label>{labelName}</label> 
           <select defaultValue={'ALL'} onChange={(e)=>filterChange(e.target.value)}>
            {dataFromContext.categories.map((option2,index) => <option key={index} value={option2}>{option2}</option>)}
           </select> 
        </div>
        </div>
        

    )
}   

export default FilterBy;