import React, {useContext} from 'react'
import FilterAndSort from '../components/FilterAndSort';
import Products from '../components/Products';
import {MyContext} from '../MyContext';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';




const Home = () => {
  
  
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


  const [open, setOpen] = React.useState(false);
  
  function handleOpen() {
      setOpen(!open);
  }

  function handleClose() {
      setOpen(false);
  }


  return (
    <div>
        <FilterAndSort/>
        <>
            <Button onClick={handleOpen} 
                variant="outlined" color="success">
                Toggle Drawer
            </Button>
            <Drawer anchor={"right"} open={open} 
                onClose={handleClose}>
                  {dataFromContext.cartList.map((prop) => 
                  <MenuItem key={prop.id} id={prop.id}><img src={prop.Image} className='cartImage' alt='t'/>{prop.name} price: {(prop.price*prop.amount).toFixed(2)} ₪ amount: {prop.amount}<br></br>
                  <button onClick={()=>removeItem(prop.id,'remove')}>-</button>
                  <button onClick={()=>removeItem(prop.id,'add')}>+</button>
                  <br></br></MenuItem>)}
                 
            </Drawer>
        </>
        <Products/> 

    </div>
  )
}

export default Home;