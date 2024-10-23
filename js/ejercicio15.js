// 15. desarrollar el algoritmo que evalué la formula cuadrática o general.

let a = parseFloat(prompt("Ingresa el coeficiente a:"));
let b = parseFloat(prompt("Ingresa el coeficiente b:"));
let c = parseFloat(prompt("Ingresa el coeficiente c:"));


let discriminante = b * b - 4 * a * c;

if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    document.write("Las soluciones son:");
    document.write("x1 = " + x1);
    document.write("x2 = " + x2);
} else if (discriminante === 0) {
    let x = -b / (2 * a);
    document.write("La solución es:");
    document.write("x = " + x);
} else {
    document.write("No hay soluciones reales.");
}