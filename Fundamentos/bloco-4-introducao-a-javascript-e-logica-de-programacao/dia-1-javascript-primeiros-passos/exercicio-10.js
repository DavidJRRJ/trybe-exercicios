const valorCusto = 1000;
const valorVenda = 2000;
const imposto = 0.20;
let lucro;
let valorCustoTotal;

if (valorVenda <= 0 || valorCusto <= 0){
    console.log("Erro!!!!")
}
else{
    valorCustoTotal = valorCusto + (valorCusto * imposto);
    lucro = valorVenda - valorCustoTotal
    console.log(lucro);
}



