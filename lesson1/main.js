
let birthYear = 1984;
console.log('my birthyear is ');
console.log(birthYear);
console.log('substract 200');
console.log(birthYear - 200);
console.log('add 100');
console.log(birthYear + 100);
console.log('multiply by 3'); 
console.log(birthYear * 3);
console.log('divide by 2');
console.log(birthYear / 2);

let firstName = "israel";
let lastName = "abramovitch";
let fullName = firstName+" "+lastName;
console.log(fullName);

let myHightexSalary = 30000;
let myTaxRate = 30; // its 30 percent 
console.log("my net salary is:");
console.log(myHightexSalary -(myHightexSalary*(myTaxRate/100)));

// let unDefined1;
// console.log(undefined1);
// console.log(notdefined1); i comment it because it stops the script from running

console.log('see no remainder 12/4');
console.log(12%4);

console.log('see  remainder 12/5');
console.log(12%5);

console.log('see  exponent of 3^3');
console.log(3**3);

let test = 10;
console.log(test);
console.log('plus 1');
test++
console.log(test);
console.log('minus 1');
test--
console.log(test);



let A = prompt("insert first number");
let B = prompt("insert second number");
let C = parseInt(A) + parseInt(B)
console.log("first is: ", A, "second is: ",B," together is: " , C);
