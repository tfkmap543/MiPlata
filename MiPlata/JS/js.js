let usuarios=[
    {   
        id : 1234,
        username : 'miguel piedrahita',
        email : 'map543@hotmail.com',
        password : '4321',
        saldo : 300000
    },
    {
        id : 4321,
        username  : 'diego escobar',
        email : 'juand@gmail.com',
        password : '1234',
        saldo : 10000000
    }

];
function ingresar(){
    let user=usuarios[0].username
    let pwd=usuarios[0].password

    if(document.getElementById('inpt-usuario').value==user && document.getElementById('inpt-contraseña').value==pwd){
        window.location="menuprincipal.html";

    }else{
        alert("Usuario o Contraseña incorrecta.");
    }
}
