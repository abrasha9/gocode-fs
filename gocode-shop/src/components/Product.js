import React from "react";
import './Product.css';

const Product = (props) => {
    return (
        <div className="product-card">
        <div className="product-image">
        <img src ={props.Image} alt='t'/>
        </div>
        <div className="product-info">
          <h5>{props.title}</h5>
          <h6>{props.Price}</h6>
        </div>
      </div>
    )
}

export default Product;