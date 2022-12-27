import React from "react";
const FilterBy = () =>{
    const labelName = "Filter By israel: ";
    const options = ['All Jackets','2016','jacket','Jackets layers','Obermeyer','Roxy','womens']
    return (
        <div className="sort">
        <div className="collection-sort">
           <label>{labelName}</label>
           <select>
            {options.map( (option2,index) => <option key={index} value="/">{option2}</option>)}
           </select> 
        </div>
        </div>
        

    )
}   

export default FilterBy;