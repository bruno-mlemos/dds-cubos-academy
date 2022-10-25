let input = `SABIO`;

function processData(input) {

    let temMaiuscula = false;
    let quantMaiuscula = 0;
    let quantMinuscula = 0;
    let inputModificado = ``;
    let arrayInput = [];

    for (let letra of input) {
        arrayInput.push(letra);
    }

    for (let letra of input) {

        if (letra == letra.toUpperCase()) {
            quantMaiuscula++;
            temMaiuscula = true;
        } else {
            quantMinuscula++;
        }
    }

    if (!temMaiuscula || (temMaiuscula && quantMinuscula > 1) || (temMaiuscula && input.length < 3 && arrayInput[0] == `${arrayInput[0]}`.toUpperCase)) {

        console.log(input);

    } else if (temMaiuscula && arrayInput[0] == `${arrayInput[0]}`.toLowerCase()) {

        for (let i = 0; i < input.length; i++) {
            if (i == 0) {
                inputModificado += `${input[i]}`.toUpperCase();
            } else {
                inputModificado += `${input[i]}`.toLowerCase();
            }
        }

        console.log(inputModificado);

    } else if (quantMaiuscula == input.length) {
        console.log(`${input}`.toLowerCase());

    } else {
        console.log(`NAO DEFINIDO`)
    }


}
processData(input);



