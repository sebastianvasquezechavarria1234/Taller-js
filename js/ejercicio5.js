// 5. desarrollar un programa que capture tres números e imprima por pantalla
// cual es el número mayor, el menor, cuales son iguales, si los tres
// diferentes.


let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

let mayor, menor;

if (num1 > num2 && num1 > num3) {
    mayor = num1;
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
} else {
    mayor = num3;
}

if (num1 < num2 && num1 < num3) {
    menor = num1;
} else if (num2 < num1 && num2 < num3) {
    menor = num2;
} else {
    menor = num3;
}

document.write("Número mayor: " + mayor);
document.write("Número menor: " + menor);

if (num1 === num2 && num1 === num3) {
    document.write("Los tres números son iguales.");
} else if (num1 === num2) {
    document.write("El primer y el segundo número son iguales.");
} else if (num1 === num3) {
    document.write("El primer y el tercer número son iguales.");
} else if (num2 === num3) {
    document.write("El segundo y el tercer número son iguales.");
}

if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
    document.write("Los tres números son diferentes.");
}
