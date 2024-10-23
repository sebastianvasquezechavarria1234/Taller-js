let pregunta = prompt("que categoria es usted");

let a = 100000
let b = 200000
let c = 300000
let d = 400000
let e = 500000

if (pregunta == "a") {
  document.write(a);
} else {
  if (pregunta == "b") {
    document.write(b);
  } else {
    if (pregunta == "c") {
      document.write(c);
    } else {
      if (pregunta == "d") {
        document.write(d);
      } else {
        if (pregunta == "e") {
          document.write(e);
        } else {
          document.write("no es una categoria escribe a, b, c, d, e");
        }
      }
    }
  }
}
