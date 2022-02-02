'use script'
// console.log(1);
// const promise = new Promise ((fulfill, reject )=> {
//     setTimeout(() => fulfill(2), 2000)
// });
//  // console.log(3);
// // promise.then(
// //     (res) => res + 7
     
// //     // (err) => console.warn(err)
// //     )
// //     .then((res) => console.log(res))
    
// //     .catch(console.warn)

//     // console.log(promise);

//     async function getData() {
//         const res = await promise;
//         console.log(res + 7);
//     }
//     //getData();

// //     fetch('https://jsonplaceholder.typicode.com/todos')
// //     .then((res) => res.json())
// //     .then((data) => {
// //     fetch('https://jsonplaceholder.typicode.com/users/'+ data[0].userId) 
// //     .then((res) => res.json())
// //     .then((user) => console.log(user.name));
// // });


// function handleResponse(res){
//     if(!res.ok){
//         console.warn('Something bad happened');
//         throw 'This is a bad error';
//     }

//     return res.json()
// }
// async function getTodos() {
// const data = await fetch('https://jsonplaceholder.typicode.com/todos')
// .then(
//     handleResponse);


//  const user = await fetch('https://jsonplaceholder.typicode.com/users/'+ data[20].userId)
//  .then(handleResponse);
// console.log(user.name);

// }
// getTodos();

//RESTful API = REpresantational State Transfer
//verbe HTTP :GET POST PUT PATCH DELETE
//Endpoint-uri:
// GET    /users => Lista de utilizatori (array de obiecte)
// POST   /users => Crea un nou utilizator (ii trimitem un obiect)
// GET    /users/:id (id nu face parte din url) => un singur utilizator(obiect)
// PUT    /users/:id => vom edita utilizatorul cu id-ul :id inlocuindu-l (transmitem un obiect complet utlizator)
// PATH   /users/:id => vom edita utilizatorul prprietate cu proprietate(transmitem un obiect cu prop. pe care vrem sa le schimbam)
// DELETE /users/:id => vom sterge utilizatorul cu id-ul :id

// vrem sa se afiseze toate todo-urile utilizatorului cu id-ul 1

// 'https://jsonplaceholder.typicode.com/todos?userId=1'

function handleResponse(res){
         if(!res.ok){
             console.warn('Something bad happened');
             throw 'This is a bad error';
        }
    
         return res.json()
     }

async function getTodos() {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
     .then(handleResponse);
    
    console.log(todos);
    const displayContainer = document.querySelector('[data-todos]');
    const fragment = document.createDocumentFragment();
    
    // for(let i=0; i<todos.length;i++){
        for (const todo of todos){
        const checkbox = document.createElement('input');
        
        const p = document.createElement('p');
        const label = document.createElement('label');
        
        checkbox.setAttribute('type', 'checkbox');//checkbox.type ='checkbox'
        label.append(todo.title);
        p.append(checkbox, label)
        fragment.append(p)

        if(todo.completed === true){
            checkbox.setAttribute('checked', true);
        }
        
displayContainer.append(fragment);
    }
    
     }
     getTodos()







