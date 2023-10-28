
//solucion

let usuarios = [
        {
            id: 1234,
            username: 'Miguel Piedrahita',
            email: 'map543@hotmail.com',
            password: 4321,
            saldo: 300000
        },
        {
            id: 4321,
            username: 'Diego Escobar',
            email: 'juand@gmail.com',
            password: 1234,
            saldo: 10000000
        }
];

let cerrar = document.querySelectorAll("#btm-salir")[0]; //creacion de la variable cerrar



/* function ingresar(event) {
    event.preventDefault(); // Evita la recarga de la página

    let indiceu = -1; // Inicializa los índices en -1
    let indicep = -1;


    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === parseInt(document.getElementById("inpt-usuario").value)) {
            indiceu = i; // Almacena el índice del usuario
            break; // Sale del bucle si encuentra el usuario
        }
    }

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].password === parseInt(document.getElementById("inpt-contraseña").value)) {
            indicep = i; // Almacena el índice de la contraseña
            break; // Sale del bucle si encuentra la contraseña
        }
    }



    console.log("Índice de usuario: " + indiceu);
    console.log("Índice de contraseña: " + indicep);
    console.log("Valor del usuario: " + document.getElementById('inpt-usuario').value);
    console.log("Valor de la contraseña: " + document.getElementById('inpt-contraseña').value);

    if (indiceu !== -1 && indicep !== -1) {
        let user = usuarios[indiceu];
        let pwd = usuarios[indicep];

        if (user.id === parseInt(document.getElementById('inpt-usuario').value) && pwd.password === parseInt(document.getElementById('inpt-contraseña').value)) {
            window.location.href = "menuprincipal.html";
        } else {
            alert("Usuario o Contraseña incorrecta.");
        }
    } else {
        alert("Usuario o Contraseña incorrecta.");
    }
} */

function ingresar(event) {
    event.preventDefault(); // Evita la recarga de la página

    let indiceu = -1; // Inicializa los índices en -1
    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === parseInt(document.getElementById("inpt-usuario").value)) {
            indiceu = i; // Almacena el índice del usuario
            break; // Sale del bucle si encuentra el usuario
        }
    }
    
    console.log("Índice de usuario: " + indiceu);
    console.log("Valor del usuario: " + document.getElementById('inpt-usuario').value);
    
    if (indiceu !== -1) {
        let user = usuarios[indiceu];
        
        
        if (user.password === parseInt(document.getElementById('inpt-contraseña').value)) {
            // La contraseña ingresada coincide con la contraseña del usuario correspondiente
            let nuser = document.getElementById("nombre_usuario");

            /* if (nuser) {
                nuser.innerText = user.username;
            } */
            localStorage.setItem('user', JSON.stringify(user)); // guardo la informacion del usuario para que no se pierda al cambiar de pagina
            
            window.location.href = "menuprincipal.html";
        } else {
            alert("Contraseña incorrecta.");
        }
    } else {
        alert("Usuario no encontrado.");
    }
}
document.addEventListener("DOMContentLoaded", function() { // utilizo la informacion gardada en el localstorage para usarla en menuprincipal

    let nuser = document.getElementById("nombre_usuario");
    let storedUser = localStorage.getItem('user');
    
    if (nuser && storedUser) {
        let user = JSON.parse(storedUser);
        nuser.innerText = user.username;
    }
});
