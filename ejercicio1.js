// taller bucles

let movimientos = [5000, -2500, 30000, -10000, 10000, -15000]

let total = 0
let cantidadRetiros = 0

for (let movimiento of movimientos) {
    total += movimiento
    if (movimiento < 0) {
        cantidadRetiros += 1
    }
    // console.log(total)
}

console.log(total)
console.log(cantidadRetiros)


