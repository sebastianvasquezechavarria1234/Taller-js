

let sueldo = parseInt(prompt("Digite su sueldo"))
let porcentaje = sueldo*15/100

if(sueldo < 300000){
    let suma = sueldo + porcentaje
    document.write("el sueldo es :" + suma)
}else{
    document.write("tu sueldo es :" + sueldo)
}