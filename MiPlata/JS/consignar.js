
function consignar(){
    let saldo_ant=0
    let nuevo_saldo=0
    let valor=parseInt(document.getElementById('valor').value)
    nuevo_saldo=saldo_ant + valor
    
    
}

let modal=document.getElementById("modal")
let otr_final=document.getElementById("trfinal")
let confirmar=document.getElementById("btn-confi")


confirmar.addEventListener("click", (e)=>{
    e.preventDefault
    otr_final.classList.remove('modal-disabledtr')

})



