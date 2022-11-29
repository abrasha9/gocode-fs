
//      !!!! NEW INTERFACE!!!
//      EVERY EXERCISE WRAPPED IN A BIG FUNCTION,
//      JUST RUN THE CODE, AND PRESS CORRESPONDING BUTTON  
//      AND THE EXERCISE FUNCTION WILL RUN
//      NO MORE COMMENTING AND UNCOMMENTING!!!!
//      WRITE EVERY EXERCISE CODE BETWEEN THE CURLY BRACKETS
//      YOU CAN USE SAME VARIABLE NAMES BECAUSE THEY'RE FUNCTION SPECIFIC

function mesima1(){
        const arrayLoop = [2,3,4];
        const arr2 = [4,5,6];
        const arrayMap = arr2.map((item) => {return item*item;})
    
        function power2loop(arr){
            console.log('original array for loop: ');
            console.log(arrayLoop);
            for (let i =0; i<arr.length; i++){
                arr[i] = arr[i]*arr[i];
            }
            console.log('new power2 array by loop: ');
            return arr;

        }
       
        console.log(power2loop(arrayLoop));
        console.log('my original array for map method: ');
        console.log(arr2);
        console.log('my power2 array by map: ');
        console.log(arrayMap);
}

//******************************* */

function mesima2(){
    const shopList = ['milk', 'bread','soap','zero','acamol'];
    console.log('original shoplist: '+shopList);
    function sortList(arr,order){
        if (order === 'a' || order === 'A') {
            arr.sort();
        } else if (order === 'd' || order === 'D'){
            arr.sort();
            arr.reverse();
        } else {
            console.log('enter only "d" or "a" please...');
        }
        console.log('sorted shopping list as demanded: ');
        console.log(arr);
    }
    sortList(shopList,prompt('enter "d" for descending or "a" '));
}

//******************************* */

function mesima3(){
    const array = ['a1','b2','c3','d4','e5','f6'];
    
    function last(arr,x){
        const newArr =[];
        if (x===null){
            newArr.push( arr.slice(arr.length-1));
            newArr.reverse();
        } else {
            newArr.push(arr.slice(length-x));
            newArr.reverse();
        }
        return newArr;
    }
console.log('original array is: '+array);
console.log('new array is : '+last(array,prompt('enter number of items: ')));
}

//******************************* */    

function mesima4(){
    const stringToFilter = ['Abramovitch','gabriel','dos','reBoot','commando','tanK'];
    function noCapital(arr){
        let noCapArray = [];
        noCapArray = arr.filter(noCap);
        function noCap(item){
            return item === item.toLowerCase();
        };
        return noCapArray;
}
console.log('the original array is: ');
console.log(stringToFilter);
console.log('the filtered array is: ');
console.log(noCapital(stringToFilter));

}

//******************************* */

function mesima5(){
    let arrayToHoldString = [];
    let stringToReverse = 'abra-cadabra';
    function reverseStr(str){
        arrayToHoldString =  str.split("");
        arrayToHoldString.reverse();
        return(arrayToHoldString.join(''));
    }
    console.log('original string: '+stringToReverse);
    console.log('reversed string: '+reverseStr(stringToReverse));
}

//******************************* */

function mesima6(){
    const palindromArray = ['aba','dart','NaN','dope','max'];
    let arrayToHoldString = [];
    function reverseStr(str){
        arrayToHoldString =  str.split("");
        arrayToHoldString.reverse();
        return(arrayToHoldString.join(''));
    }
    
    function onlyPalinArray(arr){
        arr.forEach((element,index) => {
          if (element !== reverseStr(element)){
            arr.splice(index,1);
          }  
        });
        return arr;
    }
    console.log('original array: '+palindromArray);
    console.log('palindrom only array: '+onlyPalinArray(palindromArray));
}

//******************************* */

function mesima7(){
    const animalArr = ['cow','donkey','dog','sheep','horse','cat'];
    const animalToDel = ['horse','cat','cow'];
    function delAnimals(arr,arrToDel){
        let returnArr = [];
        arr.forEach((element,index) => {
            if (!arrToDel.includes(element)){
                returnArr.push(element);
            }
        }) 
        return returnArr;
    }
    console.log('ORIGINAL ARRAY: '+animalArr);
    console.log('animals to delete: '+animalToDel);
    console.log('final array: '+delAnimals(animalArr,animalToDel));
}

//******************************* */

function mesima8(){

    function betOneToSix(){
        let guessArray = [];
        let randNum = Math.floor((Math.random()*6))+1;
        let bet;
        while (bet !== randNum){
        bet = parseInt(prompt("enter your bet between 1 to 6: "));
        if (bet === randNum){
            console.log('congrats!! your bet '+bet+' is correct!! lets see your last bets: \n'+guessArray);
        }guessArray.push(bet);
        }
    }
    betOneToSix();
}

//******************************* */

function mesima9(){
    
    function upOrDown5(order,num1,num2,num3,num4,num5){
        let array = [];
        array.push(num1,num2,num3,num4,num5);
        console.log('the numsbers: '+array+' are to be sorted - '+order);
        if (order === 'up'){
            array.sort();
        } else if (order === 'down'){
            array.sort();
            array.reverse();
        } else {console.log('enter "up" or "down" only');}
        console.log('the sorted numbers :'+array);
        }
    //behiaat almog, one prompt is enough you got the point... 
   upOrDown5(prompt('enter up or down for sorting order: '),4,1,7,3,6);     
}

//******************************* */

function mesima10(){
    let originArr = [1,2,3,4,5,6,7,8,9,10];
    let targetArr = [];
    console.log('source array is: '+originArr+' target array is: '+targetArr); 
    
    function firstCopyMethod(){
      console.log('first method - push item loop ');
      for (let i = 0; i<originArr.length; i++){
        targetArr.push(originArr[i]);        
        }
        originArr.pop(); //to show that new array has the value and not the reference only  
        console.log('result source array after last item pop: \n'+originArr+'\nand target array: \n'+targetArr);
    }

    function secondCopyMethod(){
        console.log('second method - filter method ');
        targetArr = originArr.filter((item) => (item));  
        originArr.pop(); //to show that new array has the value and not the reference only  
        console.log('result source array after last item pop: \n'+originArr+'\nand target array: \n'+targetArr);

    }

    function thirdCopyMethod(){
        console.log('third method - concat method ');
        targetArr = targetArr.concat(originArr);
        originArr.pop(); //to show that new array has the value and not the reference only  
        console.log('result source array after last item pop: \n'+originArr+'\nand target array: \n'+targetArr);
    }

    function fourthMethod(){
        console.log('fourth method - slice method ');
        targetArr = originArr.slice(0);
        originArr.pop(); //to show that new array has the value and not the reference only  
        console.log('result source array after last item pop: \n'+originArr+'\nand target array: \n'+targetArr);

    }

    function fifthMethod(){
        console.log('fifth method - map method ');
        targetArr = originArr.map((item) => (item));  
        originArr.pop(); //to show that new array has the value and not the reference only  
        console.log('result source array after last item pop: \n'+originArr+'\nand target array: \n'+targetArr);

    }

    let methodChoice = parseInt(prompt('choose method betwwen 1 to 3'));
   
    switch (methodChoice) {
        case 1:
            firstCopyMethod();
            break;
        case 2:
            secondCopyMethod();
            break;
        case 3:
            thirdCopyMethod();
            break;
        case 4:
            fourthMethod();
            break;
       case 5:
            fifthMethod();
            break;
        default:
            console.log('enter only between 1 to 3');
            break;
    }

    

}



//******************************* */

