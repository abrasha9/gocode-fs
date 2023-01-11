import React from 'react';
import { Link } from 'react-router-dom';
const TopHeader = () => {
  return (
    <div>
        <h1>welcome to my gocode-shop site!!</h1>
        <Link to={"/"}>Home </Link>
        <Link to={"/about"}>About </Link>
    </div>
  )
}
 
export default TopHeader;