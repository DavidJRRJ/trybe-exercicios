let corPagina = document.getElementById('background');
let corFonte = document.getElementById('cor');
let tamanhoFonte = document.getElementById('fonte');

function pagina(){
    document.body.style.backgroundColor = 'rgb(120, 17, 0)';
    localStorage.setItem('corFundo', 'red');
}

function Cfonte(){
    let fonte = document.querySelector('p');
    fonte.style.color = 'rgb(0, 255, 0)';
    localStorage.setItem('corFonte', 'green');
    
}

function tamFonte(){
    document.body.style.fontSize = '25px';
    localStorage.setItem('tamFonte', 'grande');
}

window.onload = function() {
    let cf = localStorage.getItem('corFonte');   
    let cp = localStorage.getItem('corFundo');
    let tf = localStorage.getItem('tamFonte');
    if(cf === 'green') document.querySelector('p').style.color = 'rgb(0, 255, 0)';
    else fonte.style.color = 'white';
    if(cp === 'red') document.body.style.backgroundColor = 'rgb(120, 17, 0)';
    else document.body.style.backgroundColor = 'blue';
    if(tf === 'grande') document.body.style.fontSize = '25px';
    else document.body.style.fontSize = '17px';

}

corFonte.addEventListener('click', Cfonte);
corPagina.addEventListener('click', pagina);
tamanhoFonte.addEventListener('click', tamFonte);
