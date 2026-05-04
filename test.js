import {
  sumar,
  parImpar,
  tablaMultiplicar,
  mayorEdad,
  ciclo
} from "../src/app.js";

let pasadas = 0;
let fallidas = 0;

function test(cond, ok, fail) {
  if (cond) {
    console.log("✔ " + ok);
    pasadas++;
  } else {
    console.log("❌ " + fail);
    fallidas++;
  }
}

function ejecutarPruebas() {

  // 🔢 1. SUMA
  test(
    sumar(5, 3) === 8,
    "Suma correcta (5 + 3 = 8)",
    "Error en suma"
  );

  // 🔀 2. PAR O IMPAR
  test(
    parImpar(4) === "Es par",
    "Par correcto (4)",
    "Error par/impar con 4"
  );

  test(
    parImpar(7) === "Es impar",
    "Impar correcto (7)",
    "Error par/impar con 7"
  );

  // 📊 3. TABLA
  const tabla = tablaMultiplicar(3);
  test(
    tabla.includes("3 x 10 = 30"),
    "Tabla de multiplicar correcta",
    "Error en tabla de multiplicar"
  );

  // 🎂 4. MAYOR DE EDAD
  test(
    mayorEdad(18) === "Mayor de edad",
    "Mayor de edad correcto",
    "Error mayor de edad (18)"
  );

  test(
    mayorEdad(15) === "Menor de edad",
    "Menor de edad correcto",
    "Error menor de edad (15)"
  );

  // 🔁 5. CICLO
  const resultadoCiclo = ciclo(1, 5);

  test(
    resultadoCiclo === "1 2 3 4 5 ",
    "Ciclo correcto (1 a 5)",
    "Error en ciclo"
  );

  console.log("\n📊 RESULTADOS FINALES:");
  console.log("✔ Pasadas:", pasadas);
  console.log("❌ Fallidas:", fallidas);

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
