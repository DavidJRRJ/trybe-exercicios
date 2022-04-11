// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let word = 'teste';

function verificaPalindrome(){
    if(word === word.split('').reverse().join('')){
        console.log('true');
    }
    else {
        console.log('false');
    }
}

verificaPalindrome(word);

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1];

function maiorIndice(){
        let max = Math.max.apply(null, array);
        console.log(max);
}

maiorIndice(array);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array3 = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(){
    let min = Math.min.apply(null, array3);
    console.log(min);
}

menorIndice(array3);
