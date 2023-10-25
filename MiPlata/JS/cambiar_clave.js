function cambiar_clave(){

    let actual=1234
    let actual_1=parseInt(document.getElementById('actual').value)
    let nueva=parseInt(document.getElementById('nueva').value)
    let confirme=parseInt(document.getElementById('confirme').value)

 
   
    if (actual==actual_1){

        if(nueva==confirme){
            actual=actual_1

            alert(" Transacción exitosa")// Aquí se inserta el modal cuando este listo
        }

        else{
            alert(" La clave nueva no coincide con la clave de confirmación")// Aquí se inserta el modal cuando este listo
        }

    }else{
        alert(" La clave actual ingresada no coincide con la clave actual")// Aquí se inserta el modal cuando este listo
    }

}





