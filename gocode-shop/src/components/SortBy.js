import React from "react";

const SortBy = () =>{
    const labelName = "Sort By israel: ";
    const options = ['Featured',"Best Selling","Alphabetically, A-Z","Alphabetically, Z-A",
        "Price, low to high","Price, high to low","Date, new to old",
    "Date,old to new"];
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

export default SortBy;