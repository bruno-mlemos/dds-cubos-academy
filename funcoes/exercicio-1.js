
function imprimeTexto(pessoa) {
    console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m de altura e sou um jovem de ${pessoa.idade} anos de idade.`);

}

let pessoa = {
    nome: "Bruno",
    idade: 24,
    altura: 1.75
};

imprimeTexto(pessoa);

