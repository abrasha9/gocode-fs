import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const TopHeader = () => {
  return (
    <div>
        <h1>welcome to my gocode-shop site!!</h1>
        <Link to={"/"}><Button variant ="contained">Home</Button> </Link>
        <Link to={"/about"}><Button variant ="contained">About</Button> </Link>
    </div>
  )
}
 
export default TopHeader;