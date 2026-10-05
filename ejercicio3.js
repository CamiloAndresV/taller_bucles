// 3

const prompt = require('prompt-sync')();

let n = 0
do {
    console.log("\n");
    console.log("=".repeat(15), "Nequi", "=".repeat(15))
    console.log("1. VER SALDO")
    console.log("2. ENVIAR DINERO")
    console.log("3. RECARGAR")
    console.log("4. SALIR")
    let opcion = Number(prompt("Ingresa una opción: "))
    if (opcion == 1) {
    console.log("ver saldo")
    } else if (opcion == 2) {
    console.log("enviar dinero")
    } else if (opcion == 3) {
    console.log("recargar")
    } else if (opcion == 4) {
    // console.log("salir")
    n = 4
    } 
} while (n != 4)

console.log("salio")