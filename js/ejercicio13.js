// 13.desarrollar un algoritmo que halle la nota total de una materia en el SENA, y
// determine si la gano o la reprobó


let nota1 = parseFloat(prompt("Ingresa la nota del primer nota:"));
let nota2 = parseFloat(prompt("Ingresa la nota del segundo nota:"));
let nota3 = parseFloat(prompt("Ingresa la nota del tercer nota:"));

let notaTotal = (nota1 + nota2 + nota3) / 3;


document.write("La nota total es: " + notaTotal);


if (notaTotal >= 3.0) {
    document.write("has aprobado la materia.");
} else {
    document.write("has reprobado la materia.");
}