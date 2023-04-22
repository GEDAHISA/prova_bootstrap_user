// const getUsers = async () => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await response.json();
//     console.log(data)
// }
// getUsers();

// let divUsers = document.querySelector ("#users")
// fetch ("dados.json"). then ((response)=> {
//     response.json(). then ((dados)=> {
//         dados.users.map ((users) => {
//             divUsers.innerHTML += <li>
//                 ${users.id}
//             </li>

//         })
    
//     })
// })


let Usuarios = document.querySelector("#usuarios")


fetch("dados.json").then((response) => {
    response.json().then((usuarios) => {
        console.log(usuarios);

        }) 

    })