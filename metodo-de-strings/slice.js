const cidade1 = "Recife - PE";
const cidade2 = "Salvador - BA";

function separarEstado(cidade) {

    let estado = cidade.slice(-2);

    return estado;
}

console.log(separarEstado(cidade1));
console.log(separarEstado(cidade2));