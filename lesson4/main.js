/*
lesson 4 - exercises
each exercise is under the comment 'mesima#' and ends with the comment //*******
each exercise code is commented in order to uncomment and run only one code at a time and to prevent double variable names
exercises 6-7 divided by the comments "1 with while" & "5 with do-while" and so on

have a yabadabadoo time checking...

    ____________
||||||||||||||||||||||

    ****     ****
    *  *     *  *
    ****     ****
    
        ////
         //
         /

    (--       --) 
      (|||||||)

      
  */  

//mesima 1

// function tenTimes(){
//     let text = prompt("enter text");
//     let total = '';
//     for (let i=0; i<10; i++){
//     total +=' '+text;
//     }
//     console.log(' '+total);
// } 
// tenTimes();

//************************ 

//mesima2

// function helloX(){
//     let hello = '';    
//     let x = parseInt(prompt('enter number of iterations:'));
//     for(x>0; x--;){
//     hello += 'hello ';
//     }
//     console.log(hello);
// }
// helloX();


//************************* */

//mesima3
// let x = 0;
// let grade =0;
// function xGrades(){
//     x = parseInt(prompt('how much grades do you have?'));
//     i = x;
//     for (i > 0; i--;){
//         let num = i+1;
//         grade += parseInt(prompt('enter grade number '+num));
//     }
//     let average = parseInt(grade/x);
//     console.log('the grades average is: '+ average);
// }
// xGrades();

//************ */

//mesima 4


// for (let i=1; i<11; i++){
//     let multysBoard ='';   
//     for(let x=1; x<11; x++){
//         multysBoard +=' '+i*x;
//     }
//     console.log('the multiply of: '+i+' are: ');
//     console.log(multysBoard);
// }
// BONUS 4
//  let multyTimes = parseInt(prompt('enter  biggest number for multiplication board: '));
//  for (let i=1; i<=multyTimes; i++){
//     let multysBoard ='';   
//     for(let x=1; x<11; x++){
//         multysBoard +=' '+i*x;
//     }
//     console.log('the multiplies of: '+i+' are: ');
//     console.log(multysBoard);
// }
//********************* */

//mesima 5

// function stopWord(){
//     let word = '';
//     while (word !== 'stop'){ 
//         word = prompt('enter word to display, and stop when you want to quit program ');
//         console.log('the word is: '+word);
//     }
//     console.log('program ended');
// } 
// stopWord();

//********************** */

//      mesima 6

// function biggestNum(){
//     let num = 0;
//     let biggest = 0;
//     while (num !== -1){
//     num = parseInt(prompt('enter some number, and enter -1 to end program: '));
//     console.log('the new number is: '+num);
//     if (num > biggest){
//         biggest = num;
//     }
//     }
//     console.log('and the biggest number is: '+biggest);
// }
// biggestNum();

//**************/

//                          mesima 7
//      1 with while

// function tenTimes(){
//     let text = prompt("enter text");
//     let total = '';
//     let i=0;
//     while(i<10){
//     total +=' '+text;
//     i++;
//     }
//     console.log(' '+total);
// } 
// tenTimes();
//**************** */

//     2 with while

// function helloX(){
//     let hello = '';    
//     let x = parseInt(prompt('enter number of iterations:'));
//     while (x>0){
//     hello += 'hello ';
//     x--;
//     }
//     console.log(hello);
// }
// helloX();

//*********************** */
//     3 with while

// let x = 0;
// let grade =0;
// function xGrades(){
//     x = parseInt(prompt('how much grades do you have?'));
//     i = x;
//     while(i>0){
//         let num = i+1;
//         grade += parseInt(prompt('enter grade number '+num));
//         i--;
//     }
//     let average = parseInt(grade/x);
//     console.log('the grades average is: '+ average);
// }
// xGrades();
//*************** */

//              mesima 8
//  5 with do-while

// function stopWord(){
//     let word = '';
//     do{ 
//         word = prompt('enter word to display, and stop when you want to quit program ');
//         console.log('the word is: '+word);
//     }while (word !== 'stop')
//     console.log('program ended');
// } 
// stopWord();

//**** */

// 6 with while

// function biggestNum(){
//     let num = 0;
//     let biggest = 0;

//     do{
//     num = parseInt(prompt('enter some number, and enter -1 to end program: '));
//     console.log('the new number is: '+num);
//     if (num > biggest){
//         biggest = num;
//     }
//     }while (num !== -1)
//     console.log('and the biggest number is: '+biggest);
// }
// biggestNum();

//************* */