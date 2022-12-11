//ex1

const inpalert = document.querySelector('.inptext');
const showbtn = document.querySelector('.showbtn');
showbtn.addEventListener('click',function(){
    alert(inpalert.value);
})


//ex2

const mouseoverxy = document.querySelector('.mouseover');
const xpos = document.querySelector('.xp');
const ypos = document.querySelector('.yp');
const posdiv = document.querySelector('.xydiv');
mouseoverxy.addEventListener('mousemove', function(event){
    xpos.innerHTML = event.offsetX;
    ypos.innerHTML = event.offsetY;
    posdiv.style.top = (event.offsetY+200) +'px';
    posdiv.style.left = (event.offsetX+10) +'px';


})

//ex3

let inpurl = document.querySelector(".input2");
let imgshow = document.querySelector('.img2');
let btnshow = document.querySelector(".showimgbtn");
btnshow.addEventListener('click',function(){
  imgshow.src = inpurl.value;  
})

//ex4

let arr = [1,2,3,4,5,6,7];
let arrbox = document.querySelector('.arrayp');
let btnremove = document.querySelector('.removearr');
arrbox.innerHTML = arr;
btnremove.addEventListener('click',function(){
    arr.pop();
    arrbox.innerHTML = arr;
})

//ex5

let colorbtn = document.querySelectorAll('.colorbtn');
let colorbg = document.querySelector('.colorbg');
console.log(colorbg);
colorbtn.forEach((element) =>
element.addEventListener('click', function(){
    colorbg.style.background = element.innerHTML;
}))

//ex6

let colorArr = ['black', 'red', 'yellow','blue','green'];
let colorbox = document.querySelector('.colorinterval');
setInterval(colorize,2000);
function colorize(){
    colorbox.style.background = colorArr[(Math.round((Math.random()*6))-1)];
    console.log(colorbox.style.background);
}


