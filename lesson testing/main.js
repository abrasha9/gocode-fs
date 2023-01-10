// let isMomHappy = true;

// // Promise
// const willIGetNewPhone = new Promise(
//     function(resolve, reject){ // fat arrow
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason);
//         }

//     }
// );

// willIGetNewPhone
//        .then(fulfilled => {
//            // yay, you got a new phone
//            console.log(fulfilled);
//            console.log('will i get fulfilled');
//         // output: { brand: 'Samsung', color: 'black' }
//        })
//        .catch(error => {
//            // oops, mom don't buy it
//            console.log(error.message);
//            console.log('will i get - catch');
//         // output: 'mom is not happy'
//        });


// function showOff(phone){
//     return new Promise(
//         function(resolve, reject){
//             let message = 'hey friend i have a new '+phone.color+' '+phone.brand+' phone';
//             resolve (message)
//         }
//     )
// }

// async function askmom2(){
//     try{
//         console.log('1');

//         const phone = await willIGetNewPhone;
//         const obj = await showOff(phone);

//     } catch(error){
//         console.log(error);
//     }
// }


// // call our promise
// const askMom = function () { 
//     console.log('before asking Mom'); // log before
//     willIGetNewPhone
//         .then(showOff)
//         .then(fulfilled => console.log(fulfilled))      
//   .catch(error => console.log(error.message));
//     console.log('after asking Mom'); // log before
// };

// askmom2();

// const getProducts = async function () {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const answer = await response.json();
  
//       console.log(answer);
//     } catch (error) {
//       console.log(error);
//     }
//   };

// השתמשו בכתובת הבאה על מנת להציג משתמש בלחיצת כפתור:
// https://randomuser.me/api/
// עצבו את המשתמש כרצונכם


const randomUser = async function(){
    try{
        const response = await fetch('https://randomuser.me/api/');
        const answer = await response.json();
        console.log(answer);
        console.log(response);
        console.log('now the foreach');
        console.log(answer.results[0].name.first);
        answer.results.forEach(element => {
            const userinfo = document.createElement('p');
            userinfo.innerHTML ='first name: '+element.name.first+
                                'last name: '+element.name.last+
                                'id num: '+element.id.value+
                                'birthdat: '+element.dob.date;
            const userdiv = document.querySelector('.userdiv');
            userdiv.appendChild(userinfo);
            
        });
    } catch (error){
        console.log(error);
        console.log('error');
    }}

const randbtn = document.querySelector('.randuserbtn');
randbtn.addEventListener('click',randomUser);

// 1.  השתמשו   בקריאת fetch   לכתובת   
//https://jsonplaceholder.typicode.com/todos
//   כדי   לבנות רשימה של li   עם   כל שמות ה todos.  
//  עבור   todo   שהושלם   הציגו את שמו עם קו חוצה. כתבו   פעם אחת בעזרת then   ופעם   נוספת בעזרת async   await.

const todofetch = async function(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const answer = await response.json();
        console.log(answer);
        answer.forEach(element => {
            const task = document.createElement('li');
            const tododiv = document.querySelector('.tododiv');
            task.innerHTML ='ID '+element.id+' TITLE: '+element.title+'||| COMPLETED? '+element.completed;
            tododiv.appendChild(task);
            if (element.completed === true){
                task.style.textDecoration = 'line-through';
                
            }
         });
    } catch(error){
        console.log(error);
        console.log('error');
    }
    }

todofetch();

  



// fetch('https://randomuser.me/api/')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

