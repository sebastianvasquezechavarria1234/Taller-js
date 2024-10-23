// 11.Escriba un algoritmo que acepte o rechace una pieza en forma de varilla,
// para una empresa de acuerdo a los siguientes criterios:
// a. Su longitud debe ser mayor de 7.5 cm pero no exceder los 9 cm
// b. Su diámetro no debe ser menor que 0.5 cm ni mayor de 1.3 cm.
// c. Por ningún motivo su masa debe exceder los 5.8 cm
// i. Nota: masa = diámetro * longitud / densidad; densidad = 3.5
// Gr/cm

const densidad = 3.5; // g/cm³

let longitud = parseFloat(prompt("Ingresa la longitud de la varilla (cm):"));
let diametro = parseFloat(prompt("Ingresa el diámetro de la varilla (cm):"));


if (longitud > 7.5 && longitud <= 9) {
    if (diametro >= 0.5 && diametro <= 1.3) {
        let masa = (diametro * longitud) / densidad;
        if (masa <= 5.8) {
            document.write("La pieza es aceptada.");
        } else {
            document.write("La pieza es rechazada: la masa excede 5.8 g.");
        }
    } else {
        document.write("La pieza es rechazada: el diámetro no es válido.");
    }
} else {
    document.write("La pieza es rechazada: la longitud no es válida.");
}
