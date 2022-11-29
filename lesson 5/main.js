//  LESSON 5 -STRING METHODS
//      !!!! NEW INTERFACE!!!
//      EVERY EXERCISE WRAPPED IN A BIG FUNCTION,
//      JUST RUN THE CODE, AND ENTER EXERCISE NUMBER 
//      AND THE EXERCISE FUNCTION WILL RUN
//      NO MORE COMMENTING AND UNCOMMENTING!!!!
//
// MESIMA 1     
function mesima1(){

function last2(str){
    //const len = str.length;
    return str.slice(str.length-2,str.length)
}
let string = prompt('enter a string');
console.log('the last 2 characters are: '+last2(string));
}
//******************* */

// MESIMA 2
function mesima2(){

function charByChar(str){ 
    for (let i = 0 ; i < str.length; i++ ){
        console.log('the '+(i+1)+'th char is: '+str[i]);
    }
}
const string = prompt('enter a string: ');
charByChar(string);
}
//**************** */

// MESIMA 3
function mesima3(){

function howMuchOfThisChar(str,char){
    let counter = 0;
    for (let i = 0; i<str.length; i++){
        if (str[i] === char){
            counter += 1;
        }
        }
    
    console.log("the char: "+char+' appears: '+counter+" times");
}

const string = prompt('enter a string: ');
const character = prompt('enter a char');
howMuchOfThisChar(string,character);
}
///************** */

// MESIMA 4
function mesima4(){

function combineStrings(str1,str2){
    let combinedstr = '';
    for(let i=0; i<str1.length; i++){
        combinedstr += str1[i]+str2[i];
    }
    console.log('the combined string is: '+combinedstr);
}
const string1 = prompt('enter first string');
const string2 = prompt('enter second string');
combineStrings(string1,string2);
}
//***************** */

//  MESIMA 5 - like 4 with different lengths
function mesima5(){
function combineStrings(str1,str2){
    let combinedStr = '';
    for(let i=0; i<(str1.length+str2.length); i++){  // I CHOOSE TO RUN MORE LOOPS TO SAVE LINES OF CODES. 
        combinedStr += str1.charAt(i)+str2.charAt(i);
    } //IN THE END THE COMBINED STRING DOESNT HAVE EMPTY CHARS - I CHECKED IT WITH TRIM()
    console.log('the combined string is: '+combinedStr);
}
const string1 = prompt('enter first string');
const string2 = prompt('enter second string');
combineStrings(string1,string2);
}

//******************** */

// //  MESIMA 6
function mesima6(){

function unique(str){
    let finalString = '';
    for (let i=0; i<str.length; i++){
        finalString += finalString.indexOf(str[i]) === -1 ? str[i] :''; 
        // YOU MENTIONED TERNARY AT THE LESSON SO I USED IT... ANYWAY IF UNACCEPTED, I'VE GOT THE IF BELOW:
        // testStr += str[i];
        // if (finalString.indexOf(str[i]) === -1 ){
        //     finalString += str[i];
        // }
    }
    return finalString;
}
const string = prompt('enter a string with some double chars: ');
const uniqOnly = unique(string);
console.log('the qnique only chars of: '+string+' are: '+uniqOnly);
}
//**************** */

//  MESIMA 7
function mesima7(){

function firstUniqChar(str){
    
    for(let i=0; i<str.length; i++){
        let counter = 0;
        for (let x=0; x<str.length; x++){
            if (str[i] === str[x]){
                counter += 1;
            }
        }
        if (counter === 1){
            return (str[i]);
        
        }
    }
}   lastIn
const string = prompt('enter string 7: ');
const abcde = firstUniqChar(string);
console.log(abcde);
}
//******************** */


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
    default:
        break; 
    }