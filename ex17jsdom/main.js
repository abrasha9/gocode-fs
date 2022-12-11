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

