// 16.desarrollar un algoritmo que capture un número y diga si es par o impar.


let numero = prompt("Ingresa un número:");

numero = parseInt(numero);

if (numero % 2 === 0) {
    document.write("El número " + numero + " es par.");
} else {
    document.write("El número " + numero + " es impar.");
}