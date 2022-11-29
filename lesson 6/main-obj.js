
//      !!!! NEW INTERFACE!!!
//      EVERY EXERCISE WRAPPED IN A BIG FUNCTION,
//      JUST RUN THE CODE, AND ENTER EXERCISE NUMBER 
//      AND THE EXERCISE FUNCTION WILL RUN
//      NO MORE COMMENTING AND UNCOMMENTING!!!!
//      WRITE EVERY EXERCISE CODE BETWEEN THE CURLY BRACKETS
//      YOU CAN USE SAME VARIABLE NAMES BECAUSE THEY'RE FUNCTION SPECIFIC

//      EXERCISE 14 - OBJECTS
let car ={
    company : 'renault',
    model : 'fluence',
    color2 : 'beige',
    year : 2011,
    pros : 'powerful motor',
    cons : 'air condition'
}
let cat ={
    name : 'basil',
    color : 'grey and white',
    age : 2,
    gender : 'male',
    game : 'lace ball',
    sayMeow : function() {
        console.log('meow!!!!!');
    }
   };


function mesima1(){
 console.log('mesima1 is informative only');

}
//******************* */
function mesima2(){
const newProp = prompt('enter new property for the cat object: ');
const newValue = prompt('enter a value for this new property: ');
cat[newProp] = newValue;
console.log(cat);
}

//********************** */
function mesima3(){
    function isThisTheCat(cat,catName){
        console.log(cat.name === catName);
    }
isThisTheCat(cat,prompt('enter cat name: (clue - cat name is basil :) ')); // cat name is basil....
}
//*************** */

function mesima4(){

let combinedObj = {};
console.log('object1 is cat: ');
console.log(cat);    
console.log('object2 is car: ');
console.log(car);
function combineObjects(obj1,obj2){
    for (prop in obj1){
        combinedObj[prop] = obj1[prop]; 
    }
    for (prop in obj2){
        combinedObj[prop] = obj2[prop]; 
    }
    console.log(combinedObj); //the keys combine in a shuffle.. dont know why
    }
console.log('combined object is: ');
combineObjects(cat,car);
}
//*************** */

function mesima5(){
 const allCats = {};

 for (let i =0; i<5; i++){
    let catNum = 'cat'+i;
    allCats[catNum] = {};
    allCats[catNum].color = prompt('enter cat number: '+i+' color: ');
 }
console.log(allCats);


}
//*************** */
function mesima6(){
    let allCats = {};
    function isThisTheCat(cat,catName){
        console.log('does the prompted cat name equals the cat name? ');
        console.log(cat.name+' =? '+ catName);
        console.log(cat.name === catName);
    }

    for (let i =0; i<3; i++){
        let catName = 'cat'+i;
        allCats[catName] = {};
        allCats[catName].name = prompt('enter cat number: '+i+' name: ');
}
const checkCatName = prompt('enter cat name for checking: ');
for (prop in allCats){
    isThisTheCat(allCats[prop],checkCatName);
}

}

//*************** */
function mesima7(){}
//*************** */
function mesima8(){}
//*************** */
function mesima9(){}
//*************** */
function mesima10(){}
//*************** */





//********************** */
// EXERCISE SELECTOR:
/******************** */

const selector = prompt('enter exercise number');

switch (selector){
    case '1' : 
        mesima1();
        break;
    case '2' : 
        mesima2();
        break;
    case '3' : 
        mesima3();
        break;
    case '4' : 
        mesima4();
        break;
    case '5' : 
        mesima5();
        break;
    case '6' : 
        mesima6();
        break;
    case '7' : 
        mesima7();
        break;
    case '8' : 
        mesima8();
        break;
    case '9' : 
        mesima9();
        break;
    case '10' : 
        mesima10();
        break;
    default:
        break; 
    }