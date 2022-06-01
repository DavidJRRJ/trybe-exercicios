// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const piada = document.querySelector('#jokeContainer');
      piada.innerHTML = data.joke;
      console.log(data.joke);
    });
};

window.onload = () => fetchJoke();