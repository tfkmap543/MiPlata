const usuarios=[123,22,123];

function ingresar(){
    let user=usuarios[1]
    let pwd=usuarios[2]

    if(document.getElementById('inpt-usuario').value==user && document.getElementById('inpt-contraseña').value==pwd){
        window.location="menuprincipal.html";

    }else{
        alert("Usuario o Contraseña incorrecta.");
    }
}
