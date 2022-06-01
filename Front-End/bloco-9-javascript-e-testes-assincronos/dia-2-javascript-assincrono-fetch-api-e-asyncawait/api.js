

async function crypto() {
  const url = 'https://api.coincap.io/v2/assets';

  try {
    // const moedas = document.querySelector('h3');
    const response = await fetch(url);
    const dados = await response.json();
    // moedas.innerText = dados.data;
    return dados.data;
  } catch(error) {
    console.log('Opa... deu ruim!');
  }
}

crypto();