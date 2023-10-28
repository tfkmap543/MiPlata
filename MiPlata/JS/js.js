
//solucion

let usuarios = [
        {
            id: 1234,
            username: 'miguel piedrahita',
            email: 'map543@hotmail.com',
            password: 4321,
            saldo: 300000
        },
        {
            id: 4321,
            username: 'diego escobar',
            email: 'juand@gmail.com',
            password: 1234,
            saldo: 10000000
        }
];

let cerrar = document.querySelectorAll("#btm-salir")[0]; //creacion de la variable cerrar



function ingresar(event) {
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
}

salir.addEventListener("click", function () {
    window.location.href = "index.html"
    
});
