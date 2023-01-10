import React, {useContext, useEffect, useState} from "react";
import './Product.css';
import { MyContext } from '../MyContext';



const Product = (props) => {

  const dataFromContext = useContext(MyContext);
  const [newInCart, setNewInCart] = useState();

  useEffect( ()=>{
  if (newInCart !== undefined){
  console.log(`the product - ${newInCart} - added to cart`); 
  }  
  },[newInCart])

  const addToCart = () =>{
    const prodArray = {id:props.id, Image:props.Image, name:props.title, price:props.Price, amount:'1'};
    let Check = dataFromContext.cartList.find((el) => el.id === prodArray.id);
    setNewInCart(props.title);
    if (Check=== undefined){
      dataFromContext.setCartList([...dataFromContext.cartList,prodArray]);
    }else{
      let itemPos = dataFromContext.cartList.indexOf(Check);
      dataFromContext.cartList[itemPos].amount++ ;
      dataFromContext.setCartList([...dataFromContext.cartList]);  
    }
    

  }
    return (
        <div className="product-card">
        <div className="product-image">
        <img src ={props.Image} alt='t'/>
        </div>
        <div className="product-info">
          <h5>{props.title}</h5>
          <h6>{props.Price}</h6>
          <button className="add" onClick={addToCart}>add to cart</button>
        </div>
      </div>
    )
}

export default Product;