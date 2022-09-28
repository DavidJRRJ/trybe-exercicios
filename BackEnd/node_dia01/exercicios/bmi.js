const readlineSync = require('readline-sync');

const name = readlineSync.question('Qual o seu nome? ');
  const height = readlineSync.questionFloat('Qual é a sua altura? ');
  const weight = readlineSync.questionFloat('Qual é o seu peso? ');

  const result = weight / (height ^ 2);

  if (result <= 18.5) console.log(`${name}, você está abaixo do peso (magreza)`);
  if (result >= 18.5 && result <= 24.9) console.log(`${name}, seu peso normal`);
  if (result >= 25 && result <= 29.9) console.log(`${name}, você está acima do peso (sobrepeso)`);
  if (result >= 30 && result <= 34.9) console.log(`${name}, você está com obesidade grau 1`);
  if (result >= 35 && result <= 39.9) console.log(`${name}, você está com obesidade grau 2`);
  if (result >= 40) console.log(`${name}, você está com obesidade grau 3 e 4`);