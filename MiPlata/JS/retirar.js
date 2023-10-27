function show() {
    let saldo=10000000
    let saldo_r=input.value

    if (saldo_r>saldo) {
        merror.classList.remove('modal-errordisabled')
        document.getElementById("otro-v").value=""

    }else{
        if (input.value.length !=0) {
            otr_final.classList.remove('modal-disabledtr')
            
        }
        else{
            mensaje.classList.remove('disabled')
            
        }

    }

    
}


let uno =document.getElementById("1")
let dos =document.getElementById("2")
let tres =document.getElementById("3")
let cuatro =document.getElementById("4")
let cinco =document.getElementById("5")
let seis =document.getElementById("6")
let siete =document.getElementById("7")
let ocho =document.getElementById("8")
let nueve =document.getElementById("9")
let cero =document.getElementById("0")
let borrar =document.getElementById("borrar")

let input = document.getElementById("otro-v")
let mensaje =document.getElementById("mensaje-m")
let open_modal=document.getElementById("otro")
let modal=document.getElementById("modal")
let close_modal=document.getElementById('btn-vol')




let show_mensaje=document.getElementById("btn-con")
let otr_final=document.getElementById("trfinal")

let r_rapido10=document.getElementById("r-rapido10")
let r_rapido100=document.getElementById("r-rapido100")
let r_rapido20=document.getElementById("r-rapido20")
let r_rapido500=document.getElementById("r-rapido500")
let r_rapido50=document.getElementById("r-rapido50")



let merror =  document.getElementById("merror")
let volver=document.getElementById('v-menuerror')

volver.addEventListener('click', (e)=>{
    e.preventDefault()
    merror.classList.add('modal-errordisabled')
    
})






r_rapido10.addEventListener('click', (e)=>{
    e.preventDefault()
    otr_final.classList.remove('modal-disabledtr')
})
r_rapido100.addEventListener('click', (e)=>{
    e.preventDefault()
    otr_final.classList.remove('modal-disabledtr')
})
r_rapido20.addEventListener('click', (e)=>{
    e.preventDefault()
    otr_final.classList.remove('modal-disabledtr')
})
r_rapido500.addEventListener('click', (e)=>{
    e.preventDefault()
    otr_final.classList.remove('modal-disabledtr')
})
r_rapido50.addEventListener('click', (e)=>{
    e.preventDefault()
    otr_final.classList.remove('modal-disabledtr')
})



show_mensaje.addEventListener('click', (e)=>{
    e.preventDefault()
    show()
})


open_modal.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.remove('modal-disabled')
})

close_modal.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.add('modal-disabled')
    document.getElementById("otro-v").value=""
})


show_mensaje.addEventListener('click', (e)=>{
    show_mensaje()
})

uno.addEventListener('click', (e)=>{
    input.value= input.value + "1"
})
dos.addEventListener('click', (e)=>{
    input.value= input.value + "2"
})
tres.addEventListener('click', (e)=>{
    input.value= input.value + "3"
})
cuatro.addEventListener('click', (e)=>{
    input.value= input.value + "4"
})
cinco.addEventListener('click', (e)=>{
    input.value= input.value + "5"
})
seis.addEventListener('click', (e)=>{
    input.value= input.value + "6"
})
siete.addEventListener('click', (e)=>{
    input.value= input.value + "7"
})
ocho.addEventListener('click', (e)=>{
    input.value= input.value + "8"
})
nueve.addEventListener('click', (e)=>{
    input.value= input.value + "9"
})
cero.addEventListener('click', (e)=>{
    input.value= input.value + "0"
})
borrar.addEventListener('click', (e)=>{
    document.getElementById("otro-v").value=""
})