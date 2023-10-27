function consignar(){
    let saldo_ant=0
    let nuevo_saldo=0
    let valor=parseInt(document.getElementById('valor').value)
    nuevo_saldo=saldo_ant + valor
    
    alert(`Transacción exitosa. Este es tu nuevo saldo ${nuevo_saldo}, este es tu saldo anterior ${saldo_ant}. \n Valor de consignación ${valor}`)
}