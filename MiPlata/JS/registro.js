function validando(){
    let clave=txtclave.value
    let con_clave=txtcon_clave.value


    if (clave === con_clave) {
        show_mensaje.classList.add("disabled")
        guardando_vector()
        reset_campos()
        
    }
    else{
       show_mensaje.classList.remove("disabled")
       
    }
}

function guardando_vector(){

    let id = document.getElementById("input-id").value
    let usuario = document.getElementById("input-us").value
    let correo = document.getElementById("input-correo").value
    let clave=txtclave.value
    let saldo = 10000000

    let usuario_r={ id, usuario, correo, clave, saldo}

    usuarios.push(usuario_r)

    console.log(usuarios)

}

function reset_campos() {
    document.getElementById("input-id").value=""
    document.getElementById("input-us").value=""
    document.getElementById("input-correo").value=""
    document.getElementById("input-clave").value=""
    document.getElementById("input-conclave").value=""
}


let usuarios = []
let txtclave = document.getElementById("input-clave")
let txtcon_clave = document.getElementById("input-conclave")
let show_mensaje = document.getElementById("mensaje")
let form = document.getElementById("registro")

let registrar = document.getElementById("btn-registrar")


registrar.addEventListener("click", validando)
