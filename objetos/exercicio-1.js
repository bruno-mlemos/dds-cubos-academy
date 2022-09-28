const pessoa = {
    nome: 'Bruno',
    idade: 24,
    altura: 1.75,
    temCNH: true,
    apelidos: ["Bruninho", "Bu", "Bubu"]
}

let textoCNH = pessoa.temCNH ? "Possui CNH" : "Não Possui CNH"


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e tem os seguintes apelidos:`);

for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}