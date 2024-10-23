// 10.A ciertos estudiantes se les dice que su calificación final será el promedio
// de las dos calificaciones más altas de entre las tres que se han obtenido en
// el curso. Haga un algoritmo que permita a un estudiante efectuar el cálculo
// correspondiente a su nota final.

let nota1 = parseFloat(prompt("Ingresa la primera calificación:"));
let nota2 = parseFloat(prompt("Ingresa la segunda calificación:"));
let nota3 = parseFloat(prompt("Ingresa la tercera calificación:"));

let mayor = 0;
let segundoMayor = 0;

if (nota1 >= nota2 && nota1 >= nota3) {
    mayor = nota1;
    segundoMayor = (nota2 >= nota3) ? nota2 : nota3;
} else if (nota2 >= nota1 && nota2 >= nota3) {
    mayor = nota2;
    segundoMayor = (nota1 >= nota3) ? nota1 : nota3;
} else {
    mayor = nota3;
    segundoMayor = (nota1 >= nota2) ? nota1 : nota2;
}

let promedio = (mayor + segundoMayor) / 2;


document.write("La calificación final es: " + promedio);
