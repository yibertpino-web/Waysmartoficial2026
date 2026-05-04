import {
  sumar,
  parImpar,
  tablaMultiplicar,
  mayorEdad,
  ciclo
} from "./src/app.js";

let pasadas = 0;
let fallidas = 0;

function test(cond, ok, fail) {
  if (cond) {
    console.log(`✔ ${ok}`);
    pasadas++;
  } else {
    console.log(`❌ ${fail}`);
    fallidas++;
  }
}

function ejecutarPruebas() {

  test(sumar(5, 3) === 8, "Suma correcta", "Error en suma");

  test(parImpar(4) === "Es par", "Par correcto", "Error con 4");
  test(parImpar(7) === "Es impar", "Impar correcto", "Error con 7");

  const tabla = tablaMultiplicar(3);
  test(tabla.includes("3 x 10 = 30"), "Tabla correcta", "Error en tabla");

  test(mayorEdad(18) === "Mayor de edad", "Mayor correcto", "Error 18");
  test(mayorEdad(15) === "Menor de edad", "Menor correcto", "Error 15");

  const resultadoCiclo = ciclo(1, 5);
  test(
    resultadoCiclo.trim() === "1 2 3 4 5",
    "Ciclo correcto",
    "Error en ciclo"
  );

  console.log("\n📊 RESULTADOS:");
  console.log("✔ Pasadas:", pasadas);
  console.log("❌ Fallidas:", fallidas);

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
