import React, {useContext} from "react";
import './Product.css';
import { MyContext } from '../MyContext';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button,Card,CardContent,CardActions,Typography,CardMedia } from '@mui/material';


const Product = (props) => {
let flag;
  useEffect(()=>{
    flag =0;
  },[])
  const dataFromContext = useContext(MyContext);

  const addToCart = () =>{
    const prodArray = {id:props.id, Image:props.Image, name:props.title, price:props.Price, amount:'1'};
    let Check = dataFromContext.cartList.find((el) => el.id === prodArray.id);
   
    if (Check=== undefined){
      if (flag === 0 && dataFromContext.cartList.length >0){
        console.log(dataFromContext.cartList);
        console.log('first if');
        dataFromContext.cartList.splice(0,1,prodArray) ;
        console.log(dataFromContext.cartList);
        dataFromContext.setCartList([...dataFromContext.cartList]);
        flag = 1;
      } else{
      dataFromContext.setCartList([...dataFromContext.cartList,prodArray]);
      }
    }else{
      let itemPos = dataFromContext.cartList.indexOf(Check);
      dataFromContext.cartList[itemPos].amount++ ;
      dataFromContext.setCartList([...dataFromContext.cartList]);  
    }
    

  }

    return (
        <div className="product-card">
        <div className="product-image">
        <Card className="product-info" variant="outlined" sx={{ maxWidth: 200 }}>
        <Link to={`/products/${props.id}`}><CardMedia className="product-image"
        sx={{ height: 250 }}
        image={props.Image}
        title="green iguana"
      /></Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title} 
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         {props.Price}₪
        </Typography>

      </CardContent>
      <CardActions>
        <Button variant="outlined" className="add" onClick={addToCart}>add to cart</Button>

      </CardActions>
    </Card>
    </div>

        {/* <Link to={`/products/${props.id}`}><img src ={props.Image} alt='t'/> </Link>
        <div className="product-info">
          <h5>{props.title}</h5>
          <h6>{props.Price}₪</h6>
          <Button variant="outlined" className="add" onClick={addToCart}>add to cart</Button>
        </div> */}
      </div>
    )
}

export default Product;