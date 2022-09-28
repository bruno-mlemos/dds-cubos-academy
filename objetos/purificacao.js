let stringCorrompida = "!Bruno Me$deiros de @Lemos";
let stringPurificada = "";
let letrasCorrompidas = ["!", "@", "#", "$", "%", "&", "*", "(", ")"]




for (let letra of stringCorrompida) {

    let contador = 0;

    for (let letraC of letrasCorrompidas) {
        if (letra !== letraC) {
            contador++;
        }
        if (contador == letrasCorrompidas.length) {
            stringPurificada += letra
        }
    }
}

console.log(stringPurificada)