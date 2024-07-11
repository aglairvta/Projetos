document.getElementById('limpar').addEventListener('click', clean);
document.getElementById('voltar').addEventListener('click', back);

document.getElementById('dividir').addEventListener('click', () => insert('/'));
document.getElementById('multiplicar').addEventListener('click', () => insert('*'));
document.getElementById('subtrair').addEventListener('click', () => insert('-'));
document.getElementById('somar').addEventListener('click', () => insert('+'));

document.getElementById('zero').addEventListener('click', () => insert('0'));
document.getElementById('um').addEventListener('click', () => insert('1'));
document.getElementById('dois').addEventListener('click', () => insert('2'));
document.getElementById('tres').addEventListener('click', () => insert('3'));
document.getElementById('quatro').addEventListener('click', () => insert('4'));
document.getElementById('cinco').addEventListener('click', () => insert('5'));
document.getElementById('seis').addEventListener('click', () => insert('6'));
document.getElementById('sete').addEventListener('click', () => insert('7'));
document.getElementById('oito').addEventListener('click', () => insert('8'));
document.getElementById('nove').addEventListener('click', () => insert('9'));

document.getElementById('ponto').addEventListener('click', () => insert('.'));
document.getElementById('calcular').addEventListener('click', calcular);

function insert (num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
};
function clean () {document.getElementById('resultado').innerHTML = ''};
function back () {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
};
function calcular () {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {document.getElementById('resultado').innerHTML = eval(resultado)}
    else {document.getElementById('resultado').innerHTML = '';};
};

const escuro = document.querySelector('.escuro');
const claro = document.querySelector('.claro');
const h1 = document.querySelector('.h1');
const body = document.body.style;
escuro.addEventListener('click', () => {
    escuro.style.display = 'none';
    claro.style.display = 'block';
    body.backgroundColor = '#000';
    h1.style.color = '#fff';
});
claro.addEventListener('click', () => {
    claro.style.display = 'none';
    escuro.style.display = 'block';
    body.backgroundColor = '#c4b4c8';
    h1.style.color = '#000';  
});