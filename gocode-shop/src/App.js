import React, {useState} from 'react';
import './App.css';
import Header2 from './components/Header2';
import Products from './components/Products';
import {prodArr} from './components/Data';

const categories = prodArr.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
categories.unshift('ALL');

const App = () => {

  const [prodFilter, setProdFilter] = useState(prodArr);
  
  return (
    <div className="App2">  
      <Header2 setProdFilter={setProdFilter} categories={categories}/>;
      <Products data={prodFilter}/>;
    </div>
  )
};

export default App;