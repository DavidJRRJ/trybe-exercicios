const salarioBruto = 2500;
let salarioBase;
let inss;
let receita;

//INSS

if (salarioBruto <= 1556.94){
    inss = salarioBruto * 0.08;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = salarioBruto * 0.11;
}
else if (salarioBruto > 5189.82){
    inss = 570.88;
}

// IR

if (salarioBruto <= 1903.98){
    receita = 0;
}
else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65){
    receita = (salarioBruto * 0.075) + 142.80;
}
else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
    receita = (salarioBruto * 0.15) + 354.80;
}
else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
    receita = (salarioBruto * 0.225) + 636.13;
}
else if (salarioBruto > 4664.68){
    receita = (salarioBruto * 0.275) + 869.36
}

salarioBase = salarioBruto - inss - receita;

console.log(inss);
console.log(receita);
console.log(salarioBase);

