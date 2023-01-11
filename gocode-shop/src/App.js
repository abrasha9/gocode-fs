import React, {useState, useEffect} from 'react';
import './App.css';
import {MyContext} from './MyContext';
import {BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from './views/Home';
import About from './views/About';
import TopHeader from './components/TopHeader';
import ProductId from './views/Products/ProductId';




const App = () => {
  const [prodFilter, setProdFilter] = useState([]);
  const [prodCat, setprodcat] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [cartList, setCartList] = useState([]);

  const getProducts = async function () {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const answer = await response.json();
      setProdFilter(answer);
      setprodcat(answer);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect ( ()=>{
    getProducts();
  },[])
 
  useEffect( ()=>{
  if (prodFilter.length > 0){
  setIsloading(false);
  }  
  },[prodFilter])

  const categories = prodCat.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
  categories.unshift('ALL');
  
  return (
    <BrowserRouter>
    <MyContext.Provider value = {{setProdFilter,categories,prodFilter,prodCat,isLoading,setIsloading,cartList,setCartList}}>
    <TopHeader/>
    <div className="App2">  
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path='/products/productId' element={<ProductId />}/>
    </Routes>  
    </div>
    </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App;