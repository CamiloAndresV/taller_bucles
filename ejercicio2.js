// 2

const prompt = require('prompt-sync')();

let pinCorrecto = 3433

let esCorrecto = false
let nIntentos = 0

while (!esCorrecto) {
    let intento = Number(prompt("ingresa el pin: "))
    if (intento === pinCorrecto) {
    console.log("Exito!")
        esCorrecto = true
    } else {
        console.log("error")
    }
}

console.log("Bienvenido")




