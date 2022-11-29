// //      TEST!!!

// // mesima 1

// function biggerOfTwo(num1,num2){
//  if(num1>num2){
//     console.log('the number '+num1+' is bigger');
//  }else if(num1<num2) {
//     console.log('the number '+num2+' is bigger');
//  }else{
//     console.log('the two numbers are equal');
//  } 
// }
// const firstNum = 7;
// const secondNum = 5;
// biggerOfTwo(firstNum,secondNum);

// mesima 2
// function biggerOfTwo(num1,num2){
//  if(num1>num2){
//     console.log('the number '+num1+' is bigger');
//  }else if(num1<num2) {
//     console.log('the number '+num2+' is bigger');
//  }else{
//     console.log('the two numbers are equal');
//  } 
// }
// const firstPromptNum=parseInt(prompt('enter first num'));
// const secondPromptNum=parseInt(prompt('enter second num'));
// biggerOfTwo(firstPromptNum,secondPromptNum);

// // mesima 3

// function makeCalc(num1,num2,operator){
//  if(operator==='/'){
//     console.log(num1/num2);
//  }else if(operator==='*'){
//     console.log(num1*num2);
//  }else if(operator==='-'){
//     console.log(num1-num2);   
//  }else if(operator==='+'){
//     console.log(num1+num2);
//  }}
//  const firstNUM=parseInt(prompt('enter first number for expression:'));
//  const SecondNUM=parseInt(prompt('enter second number for expression:'));
//  const operand=prompt('enter operator for expression:');
//  console.log('the expression: '+firstNUM+operand+SecondNUM+' equals:');
//  makeCalc(firstNUM,SecondNUM,operand);

 // meisma 4

 function makeSum(num1,num2){
    const sum = num1+num2;
    console.log('the sum of '+firstNUM+' and '+SecondNUM+' equals: '+sum);
 }
 function makeMult(num1,num2){
    const sum = num1*num2;
    console.log('the multiply of '+firstNUM+' and '+SecondNUM+' equals: '+sum);
 }
 const firstNUM = parseInt(prompt('enter first number for expression:'));
 const SecondNUM = parseInt(prompt('enter second number for expression:'));
 const operand = prompt('enter operator for expression:');
  if(operand==='*'){
    makeMult(firstNUM,SecondNUM);
 } else if(operand==='+'){
    makeSum(firstNUM,SecondNUM);
 }
 

 