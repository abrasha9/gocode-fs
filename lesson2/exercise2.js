//   MESIMA1
let firstName = prompt("enter first name");
let lastName = prompt("enter last name");

function fullName(first,last){
    console.log('my name is: '+ first +" "+ last);

}
fullName(firstName,lastName);

// MESIMA2
let x1 = parseInt( prompt("enter first num"));
let x2 = parseInt(prompt("enter second num"));
let x3 = parseInt( prompt("enter third num"));

function bigOfThree(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else return num3;
}
console.log('the biggesr number is: ' + bigOfThree(x1,x2,x3));

// MESIMA3
const y1 = parseInt(prompt("enter first num - zero/pos/neg"));
const y2 = parseInt(prompt("enter second num - zero/pos/neg"));
const y3 = parseInt(prompt("enter third num - zero/pos/neg"));
const y4 = parseInt(prompt("enter fourth num - zero/pos/neg"));

function zeroCheck(num1){
    if (num1 === 0){
        console.log(num1 +' is zero!!!!');
    } else if (num1 > 0){
        console.log(num1 +' is positive');
    } else {
        console.log(num1 + ' is negative');
    }
}
zeroCheck(y1);

zeroCheck(y2);

zeroCheck(y3);

zeroCheck(y4);

//MESIMA 4


function checkAge(age,name){
    if (age >= 18) {
        console.log('hi ' + name + ' you can enter');
    } else {
        console.log('hi ' + name + " i'm sorry you cannot enter");
    }
}

function enterClub(){
    const Name = prompt("enter your name for the club: ");
    const Age = parseInt(prompt("enter age in number: "));
   checkAge(Age,Name);    
}
enterClub(); // enter over 18
enterClub(); // enter under 18


// // MESIMA 5
function isZoogi(num1){
    if (num1 % 2 === 0 ){
        console.log('your number ' + num1 + ' is zoogi');
    } else {
        console.log('your number ' + num1 + ' isnt zoogi');
    }
 }
isZoogi(prompt("enter first number for zoogi check"));
isZoogi(prompt("enter second number for zoogi check"));
