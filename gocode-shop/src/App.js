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
  const [sliderValue, setsliderValue] = useState([0,99999]);
  const [filterCat, setFilterCat] = useState("ALL");

  const getProducts = async function () {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const answer = await response.json();
      setProdFilter(answer);
      setprodcat(answer);
      setsliderValue([1,Math.max.apply(null,answer.map((el)=>el.price))]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect( ()=>{
    if (filterCat === "ALL") {
      setProdFilter(prodCat.filter( (el) =>
      el.price >= sliderValue[0] && el.price <= sliderValue[1]
      )) 
    } else {
    setProdFilter(prodCat.filter( (el) =>
      el.price >= sliderValue[0] && el.price <= sliderValue[1]
      && el.category === filterCat
      ))
    }
  },[sliderValue,filterCat])

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
    <MyContext.Provider value = {{setProdFilter,categories,prodFilter,prodCat,isLoading,setIsloading,cartList,setCartList,sliderValue,setsliderValue,setFilterCat,filterCat}}>
    <TopHeader/>
    <div className="App2">  
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path='/products/:productId' element={<ProductId />}/>
    </Routes>  
    </div>
    </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App;