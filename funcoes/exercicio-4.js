// function defineFaixaEtaria(idade) {
// }

// function imprimeTexto(pessoa) {

// }

let pessoa = {
    nome: "Bruno",
    idade: 89,
    altura: 1.75,

    defineFaixaEtaria: function () {
        if (this.idade <= 25) {
            return "jovem";
        } else if (this.idade <= 65) {
            return "adulto";
        } else {
            return "idoso";
        }

    },

    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.altura}m de altura e sou um ${this.defineFaixaEtaria()} de ${this.idade} anos de idade.`);
    }
};

pessoa.apresentar()