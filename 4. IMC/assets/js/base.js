(function submeter() {
    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const peso = Number(document.getElementById('peso').value);
        const altura = Number(document.getElementById('altura').value);
        if (!peso) {
            exibirResultado('Dados inválidos');
            return;
        }
        const imc = calcularImc(peso, altura);
        const status = exibirStatus(imc);
        exibirResultado( `${imc} ↪︎ ${status}`);
    });
})();
function calcularImc(peso,altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}
function criarP() {
    const p = document.createElement('p');
    return p;
}
function exibirResultado(msg) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const p = criarP();
    resultado.appendChild(p);
    p.innerHTML = msg
}
function exibirStatus(imc) {
    return (imc < 18.5) ? 'Abaixo do peso' :   
           (imc >= 18.5 && imc <= 24.9) ? 'Peso ideal!' :
           (imc >= 25 && imc <= 29.9) ? 'Sobrepeso' :
           (imc >= 30 && imc <= 39.9) ? 'Obesidade' :
           (imc >= 40) ? 'Obesidade grave' :
           'Erro';
}
(function limparResultado() {
    const resultado = document.getElementById('resultado');
    const limpar = document.getElementById('reset');
    limpar.addEventListener('click', () => {
        resultado.innerHTML = '';
    })
})();