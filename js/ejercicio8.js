// 8. Prepare un algoritmo que identifique e imprima el número medio de un
// conjunto de tres números únicos. El número medio es aquel que no es el
// menor ni el mayor.

let num1 = parseInt(prompt("ingrese un número unico"))
let num2 = parseInt(prompt("ingrese un segundo número unico"))
let num3 = parseInt(prompt("ingrese un tercer número unico"))

if (num2<num1 && num2<num3 && num3>num2 && num3>num1)
    {
        document.write("el numero del medio es el " , num1)
    }
else{
    if(num1<num2 && num1<num3 && num3>num2 && num3>num1)
    {
        document.write("el numero del medio es el " , num2)    
    }
    else{
        document.write("el numero del medio es", num3)
    }
}