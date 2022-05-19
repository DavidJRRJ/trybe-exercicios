function sum (...num) {
    const soma = num.reduce((acc, current) => acc + current, 0);
    return soma;
}

console.log(sum(1, 2, 3));