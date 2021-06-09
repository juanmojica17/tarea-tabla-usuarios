let table = document.querySelector("#users-table tbody");
const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

 function createtable(userslist){

for(let i = 0; i< userslist.length; i++){

    if(userslist[i].email.indexOf("@academlo.com")>0){
        table.innerHTML += `<tr>
                <td>${userslist[i].name}</td>
                <td>${userslist[i].email}</td>
                <td>${userslist[i].age}</td>
                <td>${userslist[i].gender}</td>
                
                </tr>`;

        for(let index = 0; index < userslist[i].social.length; index++){
        table.innerHTML +=`<tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>${userslist[i].social[index].url}</td></tr>`

                




        }
    }

}}
createtable(users)






//probe por columnas y filas y no me funciono ------------------------
//let array = correctemail;
//  table = document.getElementById("table");
//for(let i = 1; i< array.rows.length; i++) {
  //  for (let j = 0;j<array.rows[i].cells.length; j++){

      //  table.rows[i].cells[j].innerHTML = array[i-0][j];
   // }
//}
//probe con el ciclo for poniendo correctemail[i], en vez de correct email en cada posicion y tampoco funciono------




