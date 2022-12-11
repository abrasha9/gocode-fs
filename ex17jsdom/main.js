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


