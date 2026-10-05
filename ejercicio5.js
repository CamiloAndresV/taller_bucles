// 5

let totalUsuario = 0

let lista = [["juan", [5000, 0, 30000]], ["paco", [1000, 0, 10000]],["emilio", [2000, 0, 30000]]]

for (let i of lista) {
    // console.log(i)
    for (let o of i[1]) {
        totalUsuario += o
        // console.log(o)
    }
    console.log(i[0])
    console.log(totalUsuario,"\n")
    totalUsuario = 0
}