import React, {useContext} from 'react';
import './Cart.css';
import {MyContext} from '../MyContext';

const Cart = () => {
  const dataFromContext = useContext(MyContext);
  return (
    <div className='cartbox'>
     <h1> Your Cart:</h1> 
     {dataFromContext.cartList.map((prop) => 
      <p key={prop.id} 
      title={prop.name}>{prop.name} price: {prop.price}₪ amount: {prop.amount}<br></br><br></br></p>)}
      
     </div>
  )
}

export default Cart