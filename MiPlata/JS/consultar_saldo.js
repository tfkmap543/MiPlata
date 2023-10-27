/* pregunta condicion del ciclo while */
let respuesta = prompt("Desea ingresar respuesta? (s/n)");
/* creo un array que contendra la matriz(la matriz contendra el momento exacto de la transaccion y el valor del saldo y se actualizara en en cada transaccionn en el vector) */
let saldoActual = parseInt(prompt("Ingrese saldo"))
let consultas =[];
let resultadoSaldo=document.getElementById("resultadoSaldo")
while(respuesta === "s"){
    /* Inserción de valores numericos */
    function operacion (signo, saldo){
        let num1 = parseInt(prompt("Ingrese valor de la operacion"));
        
        /* switch que ejecutara la operacion segun los varoles ingresados */
        let resultado
        switch(signo){
            case 1 : resultado=(saldo + num1);
            break;
            case 2 : resultado=(saldo- num1);
            break;
            default: 
                resultado = saldo;
                alert("valor Incorrecto");
            
        }
        return resultado
    }
    
    /* pregunta cuyo valor se enviará al switch */
    let signo  = parseInt(prompt("Ingrese la operacion que desea, 1 para consignar, 2 para retirar"))
    /* validacion del valor ingresado */
    if (signo == 1 || signo == 2){
    /* creo una constante donde se guardara el resultado de la duncion operacion con argumento signo lo que ejecuta la funcion*/
    const resultadoOperacion = operacion(signo, saldoActual);
        /* Asigno el valor de la funcion resultadoOperacion a  mi variable global */
        saldoActual=resultadoOperacion;
        resultadoSaldo.innerHTML=saldoActual;
    /* creo una constante donde se instancia el objeto Date() el cual me permite llevar registro del tiempo de ejecución de la operacion  */
    const momentoExacto= new Date();
    /* este código es para que la fecha me muestre unicamente en fomato fecha,h-m-s
     */
    const dia = momentoExacto.getDate();
    const mes = momentoExacto.getMonth();
    const año = momentoExacto.getFullYear();
    const hora = momentoExacto.getHours();
    const minutos = momentoExacto.getMinutes();
    const segundos = momentoExacto.getSeconds();
    const momento = dia + "/" + mes + "/" + año + "  " + hora + ":" + minutos + ":" + segundos;

    /* defino la matriz y le especifico que valores contendra */ 
    const consulta=[momento, resultadoOperacion];
    /* le indico que lo agregue al vector */
    consultas.push(consulta);
    /* imprime el tiempo y el saldo actual */
    console.log(momento + "              "+ resultadoOperacion);
    
    respuesta=prompt ("Desea ingresar otra respuesta? (s/n)")
     }else alert("Valor no valido");
}
 

console.log(consultas);

/* DOM */

let resultadoDiv = document.getElementById("registro");

// esto es una tabla que contendra el registro de la transaccion y el saldo
let tabla = document.createElement("table");


// esta es la condicion que permitira las iteraciones 
for (let i = 0; i < consultas.length; i++) {
    let fila = document.createElement("tr");
    

    let momento = consultas[i][0];
    let saldo = consultas[i][1];
    /* acá es como se envia el registro de la fecha al html */
    let celdaMomento = document.createElement( "td" );
    celdaMomento.textContent = momento;
    
    /* acá es como se envia el registro del saldo al html */
    let celdaSaldo = document.createElement("td");
    celdaSaldo.textContent = saldo;
    
    /* dato fecha */
    fila.appendChild(celdaMomento);
    /* dato saldo */
    fila.appendChild(celdaSaldo);
    /* fila que contendra el dato de fecha y saldo */
    tabla.appendChild(fila);
}
/* acá envió los valores a la tabla */
resultadoDiv.appendChild(tabla);

function BtnInicio(){
    location.href="menuprincipal.html"
}
