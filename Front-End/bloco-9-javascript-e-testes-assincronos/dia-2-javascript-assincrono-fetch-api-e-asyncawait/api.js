

async function crypto() {
  const url = 'https://api.coincap.io/v2/assets';

  try {
    const response = await fetch(url);
    const dados = await response.json();
    const coin = await dados.data;
    console.log(coin);
    return coin;
  } catch(error) {
    console.log('Opa... deu ruim!');
  }
}

const append = async () => {
  const lista = document.querySelector('#list');
  const coin = await crypto();
  
  for (let i = 0; i <= 10; i++) {
    const li = document.createElement('li');
    li.innerText = `${coin[i].name}  (${coin[i].symbol}):  ${coin[i].priceUsd}`;
    lista.appendChild(li);
  }

}

crypto();
append();