const container = document.querySelector('.container');
const hour = document.createElement('span');
const textHour = document.createTextNode('00:00:00');
hour.appendChild(textHour);
container.appendChild(hour);
const start = document.createElement('button');
const pause = document.createElement('button');
const reset = document.createElement('button');
const textStart = document.createTextNode('Iniciar');
const textPause = document.createTextNode('Pausar');
const textReset = document.createTextNode('Resetar');
start.appendChild(textStart);
pause.appendChild(textPause);
reset.appendChild(textReset);
const divButton = document.createElement('div');
divButton.appendChild(start);
divButton.appendChild(pause);
divButton.appendChild(reset);
container.appendChild(divButton);

//style
container.style.padding = '1rem'
container.style.textAlign = 'center'
divButton.style.display = 'flex'
divButton.style.justifyContent = 'center';
divButton.style.gap = '1rem';
divButton.style.margin = '1rem';
start.style.cursor = 'pointer';
pause.style.cursor = 'pointer';
reset.style.cursor = 'pointer';
hour.style.fontSize = '3rem'
start.style.border = 'none';
pause.style.border = 'none';
reset.style.border = 'none';
start.style.padding = '0.5rem';
pause.style.padding = '0.5rem';
reset.style.padding = '0.5rem';
start.style.borderRadius = '0.3rem';
pause.style.borderRadius = '0.3rem';
reset.style.borderRadius = '0.3rem';

//lógica
const zeroAEsquerda = (hora) => hora < 10 ? `0${hora}` : hora;
let intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;
const iniciar = () => {
    intervalo = setInterval(() => {
        segundos++
        if(segundos === 60){
            segundos = 0;
            minutos++
        }else if (minutos === 60) {
            minutos = 0;
            horas++
        }else if (horas === 24){
            horas = 0;
        }
        hour.textContent = `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`
        start.style.backgroundColor = 'green';
        pause.style.backgroundColor = '#fff';
        reset.style.backgroundColor = '#fff';
        hour.style.color = '#000';
    }, 1000)
}
const pausar = () => {
    clearInterval(intervalo);
    hour.style.color = 'red';
    start.style.backgroundColor = '#fff';
    pause.style.backgroundColor = 'red';
    reset.style.backgroundColor = '#fff';
}
const zerar =  () => {
    clearInterval(intervalo);
    hour.textContent = `00:00:00`
    horas = 0;
    minutos = 0;
    segundos = 0;
    start.style.backgroundColor = '#fff';
    pause.style.backgroundColor = '#fff';
    reset.style.backgroundColor = 'yellow';
    hour.style.color = '#000';
}
start.addEventListener('click', iniciar);
pause.addEventListener('click', pausar);
reset.addEventListener('click', zerar);
