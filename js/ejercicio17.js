// 17.desarrollar el algoritmo que lea tres números y diga si uno es divisible del
// otro.



let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));


if (num1 % num2 === 0) {
   document.write(num1 + " es divisible por " + num2);
} else if (num2 % num1 === 0) {
   document.write(num2 + " es divisible por " + num1);
} else if (num1 % num3 === 0) {
   document.write(num1 + " es divisible por " + num3);
} else if (num3 % num1 === 0) {
   document.write(num3 + " es divisible por " + num1);
} else if (num2 % num3 === 0) {
   document.write(num2 + " es divisible por " + num3);
} else if (num3 % num2 === 0) {
   document.write(num3 + " es divisible por " + num2);
} else {
   document.write("Ninguno de los números es divisible entre sí.");
}