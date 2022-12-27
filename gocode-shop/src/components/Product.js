import React from "react";
import './Product.css';

const Product = (props) => {
    // const Title = "Winter Jacket2";
    // const Image =  "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369";
    // const Price = "₪299.99";
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