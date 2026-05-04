console.log("JS conectado correctamente");

// 🧭 Mostrar ejercicios
function mostrar(n) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById("e" + i).style.display = "none";
    }
    document.getElementById("e" + n).style.display = "block";
}

// 🔢 Ejercicio 1: Suma
function sumar() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    document.getElementById("res").innerText = a + b;
}

// 🔢 Ejercicio 2: Par o impar
function parImpar() {
    let n = Number(document.getElementById("num").value);
    document.getElementById("res2").innerText =
        (n % 2 === 0) ? "Par" : "Impar";
}

// ✖️ Ejercicio 3: Tabla
function tabla() {
    let n = Number(document.getElementById("tabla").value);
    let t = "";

    for (let i = 1; i <= 10; i++) {
        t += `${n} x ${i} = ${n * i}<br>`;
    }

    document.getElementById("res3").innerHTML = t;
}

// 🧑‍🎓 Ejercicio 4: Edad
function edad() {
    let e = Number(document.getElementById("edad").value);
    document.getElementById("res4").innerText =
        (e >= 18) ? "Mayor de edad" : "Menor de edad";
}

// 🔁 Ejercicio 5: Ciclo
function ciclo() {
    let i = Number(document.getElementById("inicio").value);
    let f = Number(document.getElementById("fin").value);

    let r = "";
    for (let x = i; x <= f; x++) {
        r += x + " ";
    }

    document.getElementById("res5").innerText = r;
}
