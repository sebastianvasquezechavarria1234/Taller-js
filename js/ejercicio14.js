// 14. Desarrollar un algoritmo que evalué la siguiente expresión aritmética 1/n.


let n = parseFloat(prompt("Ingresa un número (n):"));


if (n === 0) {
    document.write("No se puede dividir entre cero.");
} else {
    let resultado = 1 / n;
    document.write("El resultado de 1/" + n + " es: " + resultado);
}