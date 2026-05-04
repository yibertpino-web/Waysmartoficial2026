console.log("JS conectado correctamente");

// 📘 MENÚ
window.mostrarEjercicio = function () {
  let opciones = document.querySelectorAll(".opcion");

  opciones.forEach(op => {
    op.style.display = "none";
  });

  let valor = document.getElementById("menu").value;

  if (valor) {
    document.getElementById(valor).style.display = "block";
  }
};

// 🔢 SUMA
window.sumarUI = function () {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  document.getElementById("resSuma").innerText = a + b;
};

// 🔀 PAR O IMPAR
window.parImparUI = function () {
  let n = Number(document.getElementById("numPI").value);

  document.getElementById("resPI").innerText =
    (n % 2 === 0) ? "Par" : "Impar";
};

// 📊 TABLA
window.tablaUI = function () {
  let n = Number(document.getElementById("numTabla").value);
  let t = "";

  for (let i = 1; i <= 10; i++) {
    t += `${n} x ${i} = ${n * i}\n`;
  }

  document.getElementById("resTabla").innerText = t;
};

// 🎂 EDAD
window.mayorEdadUI = function () {
  let e = Number(document.getElementById("edadInput").value);

  document.getElementById("resEdad").innerText =
    (e >= 18) ? "Mayor de edad" : "Menor de edad";
};

// 🔁 CICLO
window.cicloUI = function () {
  let ini = Number(document.getElementById("inicio").value);
  let fin = Number(document.getElementById("fin").value);

  let r = "";
  for (let i = ini; i <= fin; i++) {
    r += i + " ";
  }

  document.getElementById("resCiclo").innerText = r;
};
function mostrarMenu() {
  let menu = document.getElementById("menu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
