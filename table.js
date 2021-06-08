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

  let correctemail = [];

for(let i = 0; i< users.length; i++){

    if(users[i].email.lastIndexOf("@academlo.com")>0){
        correctemail.push(users[i]);
       // console.log(correctemail);
}}console.log(correctemail);


let nombre1 = document.getElementById("1.1");
edad1 = document.getElementById("1.2");
email1 = document.getElementById("1.3");
social1 = document.getElementById("1.4");
genero1 = document.getElementById("1.5");
nombre2 = document.getElementById("2.1");
edad2 = document.getElementById("2.2");
email2 = document.getElementById("2.3");
social2 = document.getElementById("2.4");
genero2 = document.getElementById("2.5");
nombre3 = document.getElementById("3.1");
edad3 = document.getElementById("3.2");
email3 = document.getElementById("3.3");
social3 = document.getElementById("3.4");
genero3 = document.getElementById("3.5");



for(let i = 0; i< correctemail.length; i++) {
console.log(correctemail[i].name)



    nombre1.innerHTML= correctemail[0].name;
    edad1.innerHTML = correctemail[0].age;
    email1.innerHTML = correctemail[0].email;
    social1.innerHTML = correctemail[0].social;
    genero1.innerHTML = correctemail[0].gender;
    nombre2.innerHTML = correctemail[1].name;
    edad2.innerHTML = correctemail[1].age;
    email2.innerHTML = correctemail[1].email;
    social2.innerHTML = correctemail[1].social;
    genero2.innerHTML = correctemail[1].gender;
    nombre3.innerHTML = correctemail[2].name;
    edad3.innerHTML = correctemail[2].age;
    email3.innerHTML = correctemail[2].email;
    social3.innerHTML = correctemail[2].social;
    genero3.innerHTML = correctemail[2].gender;

}
//probe por columnas y filas y no me funciono ------------------------
//let array = correctemail;
//  table = document.getElementById("table");
//for(let i = 1; i< array.rows.length; i++) {
  //  for (let j = 0;j<array.rows[i].cells.length; j++){

      //  table.rows[i].cells[j].innerHTML = array[i-0][j];
   // }
//}
//probe con el ciclo for poniendo correctemail[i], en vez de correct email en cada posicion y tampoco funciono------




