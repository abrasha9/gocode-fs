
//      !!!! NEW INTERFACE!!!
//      EVERY EXERCISE WRAPPED IN A BIG FUNCTION,
//      JUST RUN THE CODE, AND ENTER EXERCISE NUMBER 
//      AND THE EXERCISE FUNCTION WILL RUN
//      NO MORE COMMENTING AND UNCOMMENTING!!!!
//      WRITE EVERY EXERCISE CODE BETWEEN THE CURLY BRACKETS
//      YOU CAN USE SAME VARIABLE NAMES BECAUSE THEY'RE FUNCTION SPECIFIC

function mesima1(){
    let array = [];
    function promptItemNum(){
        const itemNum = parseInt(prompt('enter number for array items: '));
        for (let i = 1; i<=itemNum; i++){
            array.push('item num'+i+ ' ');// i did +1 because its prettier
        }
    }
    promptItemNum();
    console.log('the array is: '+array);
    
}

//******************************* */

function mesima2(){

    const array1 = ['abc','second','third'];

    function doubled(arr1){
        const doubleArr = [];
        for (i =0; i<arr1.length; i++){
         doubleArr.push(arr1[i]);
         doubleArr.push(arr1[i]);   
        }

        
        return doubleArr;
    }
    const newArray1 = doubled(array1);
    console.log(newArray1);
    

}

//******************************* */

function mesima3(){
let reversedArr = ['one','two','three','four', 'five'];
console.log('this is my original array: ');
console.log(reversedArr);
const arr2 = [];
function reverseArray(arr1){
        for (let i =arr1.length-1; i>=0; i--){
          arr2.push(arr1[i]);
        }     
      console.log('this is my reversed array: ');
      console.log(arr2);  
    }
reverseArray(reversedArr);
}

//******************************* */    

function mesima4(){
    const arr1 = [];
    function folowNumArr(){
        arr1[0] = parseInt(prompt('enter first number for the array: '));
        console.log('this is my first number: ');
        console.log(arr1[0]);
        for (let i=0; i<9; i++){
            arr1.push(arr1[i]+1);
        }
        console.log('this is my array: ');
        console.log(arr1);
    }
    folowNumArr();
}

//******************************* */

function mesima5(){
    function fourDogs(){
        const dogArr = [{
            eye_color : ' ',
            weight : ' ',
            age : ' ',
        },
        {
            eye_color : ' ',
            weight : ' ',
            age : ' ',
        },{
            eye_color : ' ',
            weight : ' ',
            age : ' ',
        },{
            eye_color : ' ',
            weight : ' ',
            age : ' ',
        },
        ];
        let dogCounter = 1;
        dogArr.forEach(function(item){
            item.age = prompt('enter age for dog number '+dogCounter);
            item.eye_color = prompt('enter eye color for dog number '+dogCounter);
            item.weight = prompt('enter weight for dog number '+dogCounter);
            dogCounter++;
        })           
     
        console.log(dogArr);
    }
    fourDogs();
}

//******************************* */

function mesima6(){

}

//******************************* */

function mesima7(){

}

//******************************* */

function mesima8(){

}

//******************************* */

function mesima9(){

}

//******************************* */

function mesima10(){

}

//******************************* */


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