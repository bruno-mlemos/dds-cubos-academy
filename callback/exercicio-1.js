const dados = (callback) => {

    const nome = "Bruno";
    const idade = "24";

    callback(nome, idade);
}

const funcaoCallback = (nome, idade) => {

    console.log(nome);
    console.log(idade);


}

dados(funcaoCallback);