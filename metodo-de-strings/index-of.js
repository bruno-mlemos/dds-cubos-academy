const email = "brunomlb@.outlookcom";

function verificarEmail(email) {
    let temArroba = email.indexOf("@");
    let temPonto = email.indexOf(".", temArroba + 2);

    if (temArroba != -1 && temPonto !== -1) {
        console.log(`${email} é um email valido.`);
    } else {
        console.log(`${email} não é um email valido.`);
    }

}

verificarEmail(email);