const btnColor = document.querySelector('.btnColor');
const todoList = document.querySelector('.todoList');
const todoInp = document.querySelector('.todoInp');
const addBtn = document.querySelector('.addBtn');




btnColor.addEventListener('click',function(){
    if (btnColor.innerHTML === 'Dark Mode') {
      todoList.style.background = 'gray';
      btnColor.innerHTML = 'Light Mode';
     } else {
     todoList.style.background = 'white';
     btnColor.innerHTML = 'Dark Mode';
    }
})

addBtn.addEventListener('click', function(){
    const todoItem = document.createElement('div');
    const remBtn = document.createElement('button');
    remBtn.class  = 'remBtn';
    remBtn.innerHTML = 'REMOVE';
    remBtn.style.margin = '0px 0px 0px 10px';
    todoItem.class = 'todoItem';
    todoItem.className = 'todoItem';

    todoItem.style.padding = '20px';
    todoItem.style.border = '2px solid black ';
    todoItem.style.margin = '8px';
    todoItem.innerHTML = todoInp.value;
    todoItem.style.display = 'flex';
    todoItem.style.justifyContent = 'center';
    todoList.appendChild(todoItem);
    todoItem.appendChild(remBtn);
    todoInp.value = '';


})
const todoItem = document.querySelectorAll('div');
todoItem.forEach(element => console.log(element))
const remBtn = document.querySelectorAll('.remBtn');
remBtn.forEach(function(element){
    element.addEventListener('click',function(){
        todoList.parentNode.removeChild(todoItem);
        console.log('remove!!');
    })
}) 
todoItem.innerHTML = todoInp.value;