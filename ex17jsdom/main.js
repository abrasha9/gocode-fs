<<<<<<< HEAD
// const newbtn = document.querySelectorAll('circle');
// console.log(newbtn);
// // // newbtn.addEventListener('click',function(event)){
// // //     // console.log(event);
// // //     element.style.backgroundcolor = blue;
// // // }

const inpalert = document.querySelector('.inptext');
const showbtn = document.querySelector('.showbtn');
showbtn.onclick = function(){
    alert(inpalert.value);
}


const mouseoverxy = document.querySelector('.mouseover');
let x = mouseoverxy.getBoundingClientRect()
mouseoverxy.addEventListener('mouseover', function(event){
    console.log("mouse x position is: "+event.offsetX);
    console.log("mouse y position is: "+event.offsetY);

})

const inpurl = document.querySelector('.inpimgurl');
const imgfromurl = document.querySelector('.showimg');
imgfromurl.innerHTML.src = 'https://www.celladorales.com/wp-content/uploads/2016/12/ShippingBox_sq.jpg';

=======
let inpurl = document.querySelector("input");
let imgshow = document.querySelector('img');
console.log(inpurl);
let btnshow = document.querySelector(".showbtn");
btnshow.addEventListener('click',function(){
  imgshow.src = inpurl.value;  
})

let arr = [1,2,3,4,5,6,7];
let arrbox = document.querySelector('.arrayp');
let btnremove = document.querySelector('.removearr');
arrbox.innerHTML = arr;
btnremove.addEventListener('click',function(){
    arr.pop();
    console.log(arr);
    arrbox.innerHTML = arr;
})

let colorbtn = document.querySelectorAll('.colorbtn');
console.log(colorbtn.innerHTML);
let colorbg = document.querySelector('div');
console.log(colorbg);
colorbtn.forEach((element) =>
element.addEventListener('click', function(){
    colorbg.style.background = element.innerHTML;
}))
>>>>>>> c5f86879f15e5e4bd286e2820bb877d6cb802060

