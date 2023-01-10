import React, {useContext} from 'react';
import './Cart.css';
import {MyContext} from '../MyContext';

const Cart = () => {
 

  const dataFromContext = useContext(MyContext);


  const removeItem = (id,command) =>{
    console.log(id);
    let position = dataFromContext.cartList.findIndex((el)=>( el.id === id))
    if (command === 'remove'){
      dataFromContext.cartList[position].amount--;
    } else {
      dataFromContext.cartList[position].amount++;

    }
  if (dataFromContext.cartList[position].amount === 0){
    dataFromContext.cartList.splice(position,1);
  }
    dataFromContext.setCartList([...dataFromContext.cartList]); 
  }

  return (
    <div className='cartbox'>
     <h1> Your Cart:</h1> 
     {dataFromContext.cartList.map((prop) => 
      <p key={prop.id} id={prop.id}><img src={prop.Image} className='cartImage' alt='t'/>{prop.name} price: {(prop.price*prop.amount).toFixed(2)} ₪ amount: {prop.amount}<br></br>
      <button onClick={()=>removeItem(prop.id,'remove')}>-</button>
      <button onClick={()=>removeItem(prop.id,'add')}>+</button>
      
      <br></br></p>)}
      
     </div>
  )
}

export default Cart