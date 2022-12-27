import React from 'react';
import './App.css';
import Header2 from './components/Header2';
import Products from './components/Products';
import {prodArr} from './components/Data';


const App = () => {
  console.log(prodArr);
  return (
    <div className="App2">  
      <Header2/>;
      <Products data={prodArr}/>;
    </div>
  )
};

export default App;