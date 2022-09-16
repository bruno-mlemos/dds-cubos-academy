let parcelas = 13, produto = 150;
let unidade = produto === 1 ? "real" : "reais";
let taxaDeJuros = 0.02;

if (parcelas === 1) {

    console.log(`Parabéns, você conseguiu um desconto de 10% no produto. \nO valor do produto será de ${produto * 0.9} ${unidade}`);

} else if (parcelas > 1 && parcelas <= 6) {
    let valorParcela = produto / parcelas;
    console.log(`Você optou por dividir em ${parcelas} vezes sem juros. \nO valor de cada parcela será de ${valorParcela} ${unidade}`);

} else if (parcelas > 6 && parcelas <= 12) {

    let montante = produto * (1 + taxaDeJuros) ** parcelas;
    let valorParcela = montante / parcelas;


    console.log(`Você optou por dividir em ${parcelas} vezes com juros.\nO valor de cada parcela será de ${valorParcela.toFixed(2)} ${unidade}.\nO valor final do produto sairá por: ${montante.toFixed(2)} ${unidade}`);

} else {
    console.log(`Não é possível dividir em ${parcelas} vezes`);
}