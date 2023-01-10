import React, {useContext} from 'react';
import './Cart.css';
import {MyContext} from '../MyContext';

const Cart = () => {
 

  const dataFromContext = useContext(MyContext);
  const remove = () =>{
      dataFromContext.cartList.amount-- ;
      dataFromContext.setCartList([...dataFromContext.cartList]);  
    console.log('remove');
  }
  return (
    <div className='cartbox'>
     <h1> Your Cart:</h1> 
     {dataFromContext.cartList.map((prop) => 
      <p key={prop.id} 
      title={prop.name}><img src={prop.Image} className='cartImage' />{prop.name} price: {prop.price}₪ amount: {prop.amount}<br></br><br></br>
      <button key= '999999' className='remove' onClick={remove}>Remove from cart</button><br></br>
      </p>) 
      }
      
     </div>
  )
}

export default Cart