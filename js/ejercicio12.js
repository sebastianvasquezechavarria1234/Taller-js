// 12.Un vendedor desea calcular su comisión total sobre las ventas de varios
// artículos. Al vendedor le corresponde el 3% de comisión sobre artículos
// cuyo precio es menor de $2.000.oo y el 5% de comisión sobre artículos
// cuyo precio es de $2000.oo o más. El vendedor hizo 50 ventas y desea
// saber también cuántas ventas hizo menores de 2000 y cuantas mayores o
// iguales a 2000.


let comisionTotal = 0;
let ventasMenores = 0;
let ventasMayores = 0;

let precio1 = parseFloat(prompt("Ingresa el precio de la venta 1:"));
let precio2 = parseFloat(prompt("Ingresa el precio de la venta 2:"));
let precio3 = parseFloat(prompt("Ingresa el precio de la venta 3:"));
let precio4 = parseFloat(prompt("Ingresa el precio de la venta 4:"));
let precio5 = parseFloat(prompt("Ingresa el precio de la venta 5:"));


if (precio1 < 2000) {
    comisionTotal += precio1 * 0.03;
    ventasMenores++;
} else {
    comisionTotal += precio1 * 0.05;
    ventasMayores++;
}

if (precio2 < 2000) {
    comisionTotal += precio2 * 0.03;
    ventasMenores++;
} else {
    comisionTotal += precio2 * 0.05;
    ventasMayores++;
}

if (precio3 < 2000) {
    comisionTotal += precio3 * 0.03;
    ventasMenores++;
} else {
    comisionTotal += precio3 * 0.05;
    ventasMayores++;
}

if (precio4 < 2000) {
    comisionTotal += precio4 * 0.03;
    ventasMenores++;
} else {
    comisionTotal += precio4 * 0.05;
    ventasMayores++;
}

if (precio5 < 2000) {
    comisionTotal += precio5 * 0.03;
    ventasMenores++;
} else {
    comisionTotal += precio5 * 0.05;
    ventasMayores++;
}

document.write("Comisión total: $" + comisionTotal.toFixed(2));
document.write("Ventas menores a $2000: " + ventasMenores);
document.write("Ventas mayores o iguales a $2000: " + ventasMayores);