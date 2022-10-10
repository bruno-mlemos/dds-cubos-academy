function defineFaixaEtaria(idade) {
    if (idade <= 25) {
        return "jovem";
    } else if (idade <= 65) {
        return "adulto";
    } else {
        return "idoso";
    }
}

function imprimeTexto(pessoa) {
    console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m de altura e sou um ${defineFaixaEtaria(pessoa.idade)} de ${pessoa.idade} anos de idade.`);

}

let pessoa = {
    nome: "Bruno",
    idade: 89,
    altura: 1.75
};

imprimeTexto(pessoa)