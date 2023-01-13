import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart';
import { useSearchParams } from 'react-router-dom';



      
const About = () => {

 
  const [paramArray,setParamArray] =useState([]);
  const tempArr = [];
  const [searchParams] = useSearchParams();
  
  useEffect(()=>{
    ReadQueriParam();
  },[])  


    const ReadQueriParam = () =>{
      for (const entry of searchParams){
        const tempObj = 
        { param:entry[0],
           value:entry[1],
          };
        tempArr.push(tempObj);
      }
      setParamArray(tempArr);
    }
 

  return (
    <div>
    <h1>ABOUT</h1>
    <a href="http://localhost:3000/about?a=5&b=7&c=8&abcdefghi=9578324878&user=youAreTheBestUserEver">click here for queriparam</a>
    {paramArray.map((prop, index) =>
      <p key={index}>THE PARAMETER: {prop.param} VALUE is: {prop.value}</p>
      )}
    <Cart/>        
    </div>
  )
}

export default About;