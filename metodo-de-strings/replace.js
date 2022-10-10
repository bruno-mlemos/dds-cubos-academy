const numero = "1,334,133,000"

function transformarNumero(numero) {



    numeroAlterado = numero.replace(/,/g, ".");
    return numeroAlterado
}

console.log(transformarNumero(numero));