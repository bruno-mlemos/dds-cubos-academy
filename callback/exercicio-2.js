const calculoImc = (altura, peso, callback) => {
    const resultado = peso / altura ** 2;

    callback(resultado);
}


const apresentarImc = (resultado) => {

    if (resultado < 18) {
        console.log(`Desnutrido`);
    } else if (resultado >= 18 && resultado <= 25) {
        console.log(`Normal`);
    } else {
        console.log(`Sobrepeso`);

    }

}

calculoImc(1.75, 69, apresentarImc);