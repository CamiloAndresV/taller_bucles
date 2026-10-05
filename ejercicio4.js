//4

let posicionEncontrada = 0

let movimientos = [5000, 0, 30000, 0, 10000, 0]
let pagoC = 10000

for (let i = 0; i < movimientos.length; i++) {
    if (movimientos[i] === 0) {
        continue
    } else if (movimientos[i] === 10000) {
        console.log("pago a comercio");
        console.log(i)
        break
    }
}
