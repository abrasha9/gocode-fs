import React from 'react'
import FilterAndSort from '../components/FilterAndSort';
import Products from '../components/Products';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div>
        <FilterAndSort/>
        <Cart/>
        <Products/> 

    </div>
  )
}

export default Home;