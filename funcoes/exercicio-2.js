function defineFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade <= 65) {
        return "adulto";
    } else {
        return "idoso";
    }
}

console.log(defineFaixaEtaria(12));