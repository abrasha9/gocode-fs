
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

const  FilterAndSort = () => {
    
    return (
        <div>    
     <nav className="product-filter">
      <h1>Jackets2</h1>
      <FilterBy/>
      <SortBy/>
    </nav>

        </div>
    )
}
const Product = (props) => {
    // const Title = "Winter Jacket2";
    const Image =  "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369";
    const Price = "₪299.99";
    const isAdmin = true;
    return (
        <div className="product-card">
        <div className="product-image">
        {isAdmin && (<img src ={Image}/>)}
        </div>
        <div className="product-info">
          <h5>{props.title}</h5>
          <h6>{Price}</h6>
        </div>
      </div>
    )
}
const Products = () => {
    return(
        <section className="products">
         <Product title={"firts jacekt"}/>   
         <Product title={"last jacekt"}/>   
         <Product title={"last jacekt"}/>   
         <Product title={"last jacekt"}/>               
         <Product title={"last jacekt"}/>   
         <Product title={"last jacekt"}/>   
         <Product title={"last jacekt"}/>   
         <Product title={"last jacekt"}/>   

        </section>
    )
}

const Main2 = () => {
    return(
        <div>
            <FilterAndSort />
            <Products />
        </div>
    )
}

ReactDOM.render(<Main2/>,document.getElementById("myDiv"));

