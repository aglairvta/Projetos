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

//switch
const claro = document.querySelector('.claro');
const escuro = document.querySelector('.escuro');
const h1 = document.querySelector('h1');
escuro.addEventListener('click', () => {
   escuro.style.display = 'none';
   claro.style.display = 'block'
   document.body.style.backgroundColor = '#202020';
   container.style.backgroundColor = '#000';
   updateHourColor();
})
claro.addEventListener('click', () => {
claro.style.display = 'none';
escuro.style.display = 'block';
document.body.style.backgroundColor = '#a5bc7e';
container.style.backgroundColor = '#a5bc7e';
updateHourColor();
})

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
        updateHourColor();
    }, 1000)
}
const pausar = () => {
    clearInterval(intervalo);
    hour.style.color = 'red';
}
const zerar =  () => {
    clearInterval(intervalo);
    hour.textContent = `00:00:00`
    horas = 0;
    minutos = 0;
    segundos = 0;
    updateHourColor();
}
document.addEventListener('DOMContentLoaded', () => {
    updateHourColor(); 
});
const updateHourColor = () => {
    const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor.toLowerCase();
    if (bodyBackgroundColor === 'rgb(165, 188, 126)' || bodyBackgroundColor === '#a5bc7e') {
        hour.style.color = '#000'; 
        h1.style.color = '#000';
    } else {
        hour.style.color = '#fff';
        h1.style.color = '#fff';
    }
};
start.addEventListener('click', iniciar);
pause.addEventListener('click', pausar);
reset.addEventListener('click', zerar);
