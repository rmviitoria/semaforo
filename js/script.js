const turnOnRed = document.getElementById('vermelho');
const turnOnYellow = document.getElementById('amarelo');
const turnOnGreen = document.getElementById('verde');
const turnOn = document.getElementById('alterar');

function ligarLampVermelha(){
    sem.src='./img/vermelho.jpg';
}
function ligarLampAmarela(){
    sem.src='./img/amarelo.jpg';
}
function ligarLampVerde(){
    sem.src='./img/verde.jpg';
}
function ligarLampAlterar(){
    sem.src='./img/nenhum.jpg';
}

turnOnRed.addEventListener('click', ligarLampVermelha)
turnOnYellow.addEventListener('click', ligarLampAmarela)
turnOnGreen.addEventListener('click', ligarLampVerde)
turnOn.addEventListener('click', ligarLampAlterar)