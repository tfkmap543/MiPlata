


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
let open_modal=document.getElementById("otro")
let modal=document.getElementById("modal")
let close_modal=document.getElementById('btn-vol')

open_modal.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.remove('modal-disabled')
})

close_modal.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.add('modal-disabled')
    document.getElementById("otro-v").value=""
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