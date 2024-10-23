

let nombre = prompt("Digite su nombre")
let edad = parseInt(prompt("Digite su edad"))
let sexo = prompt("Digite su sexo m de masculino, f de femenino")
let estadoCivil = prompt("Digite su estado civil")

if(sexo == "m" && estadoCivil == "soltero"){
    document.write("usted es un hombre "+ estadoCivil + " con "+ edad)
    
}else{
    if(sexo == "f" && estadoCivil == "soltera"){
        document.write("usted es una mujer "+ estadoCivil + " con "+ edad)
    }else{
        if(edad => 50 || estadoCivil == "casado" ){
            document.write("no aplicas para las cita porque eres casado(a)")
        }
    }
   
}