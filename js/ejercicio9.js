// 9. Dados tres números enteros únicos, a, b y c. Elabore un algoritmo que los
// ordene de mayor a menor e imprímalos.

let a = parseInt(prompt("Ingresa el primer número:"));
let b = parseInt(prompt("Ingresa el segundo número:"));
let c = parseInt(prompt("Ingresa el tercer número:"));

let mayor, medio, menor;

if (a > b && a > c) {
    mayor = a;
    if (b > c) {
        medio = b;
        menor = c;
    } else {
        medio = c;
        menor = b;
    }
} else if (b > a && b > c) {
    mayor = b;
    if (a > c) {
        medio = a;
        menor = c;
    } else {
        medio = c;
        menor = a;
    }
} else {
    mayor = c;
    if (a > b) {
        medio = a;
        menor = b;
    } else {
        medio = b;
        menor = a;
    }
}

document.write("Números ordenados de mayor a menor: " + mayor + ", " + medio + ", " + menor);
