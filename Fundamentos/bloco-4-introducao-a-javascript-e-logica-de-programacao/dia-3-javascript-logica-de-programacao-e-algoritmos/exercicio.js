/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
*/

let fatorial = 10;

for (let i = 1; i <= 10; i++){
    fatorial = fatorial * i;
}
console.log('Fatorial de 10:' + fatorial);

/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. 
*/

let word = 'tryber';
console.log('inversão de palavra:' + word.split('').reverse().join(''));

// 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = [];

for (i = 0; i < array.length; i++){
    maior.push(array[i].length);
} 
maior = maior.reverse();
console.log(maior);


// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let div = 2;
let primos  = [];

for (i = 3; i <= 50; i++){
    if (i % div > 0){
        primos = i;
        console.log('Numeros primos:' + primos);
    }
}


