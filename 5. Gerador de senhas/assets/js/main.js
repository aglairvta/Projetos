const numeroControl = document.getElementById('numeroControl');
const valueControl = document.getElementById('valueControl');

numeroControl.addEventListener('input', () => {
    valueControl.innerText = numeroControl.value;
});

function gerarSenha(comprimento) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|[]\\;\',./<>?:';
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indice);
    }
    return senha;
}

function copiarSenha() {
    resultadoInput.select();
    document.execCommand('copy');
    mostrarMensagemCopiada();
}

function mostrarMensagemCopiada() {
    const mensagem = document.createElement('span');
    mensagem.textContent = 'Senha copiada.';
    mensagem.classList.add('copied-message');
    resultadoInput.parentNode.appendChild(mensagem);
    setTimeout(() => {
        mensagem.remove();
    }, 500);
}

const resultadoInput = document.getElementById('resultados');
const gerarBtn = document.getElementById('gerar-novos-resultados');

numeroControl.addEventListener('input', () => {
    valueControl.innerText = numeroControl.value;
});

resultadoInput.addEventListener('click', copiarSenha);

gerarBtn.addEventListener('click', () => {
    const comprimento = parseInt(numeroControl.value);
    const novaSenha = gerarSenha(comprimento);
    resultadoInput.value = novaSenha;
});

const comprimentoInicial = parseInt(numeroControl.value);
resultadoInput.value = gerarSenha(comprimentoInicial);
