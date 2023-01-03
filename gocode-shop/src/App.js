import React, {useState, useEffect} from 'react';
import './App.css';
import Header2 from './components/Header2';
import Products from './components/Products';
// import ProdArr from './components/Data';
import {MyContext} from './MyContext';





const App = () => {
  const [prodFilter, setProdFilter] = useState([]);
  const [prodCat, setprodcat] = useState([])
  const [isLoading, setIsloading] = useState(true)

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
    <MyContext.Provider value = {{setProdFilter,categories,prodFilter,prodCat,isLoading,setIsloading}}>
    <div className="App2">  
      <Header2/>
      <Products/> 
    </div>
    </MyContext.Provider>
  )
}

export default App;