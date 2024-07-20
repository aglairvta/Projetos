//divLista,checkbox,p,buttons
function criarDivLista(){
    const container = document.querySelector('.container');
    const newDivLista = document.createElement('div');
    const styleDl = newDivLista.style;
    styleDl.display = 'flex';
    styleDl.alignItems = 'center';
    styleDl.gap = '0.5rem';
    styleDl.maxWidth = '350px';
    styleDl.marginLeft = '1rem'
    styleDl.padding = '0.5rem';
    styleDl.backgroundColor = '#ebe5e5';
    styleDl.margin = '0.5rem';
    container.appendChild(newDivLista);
    return newDivLista;
};
function criarCheckbox(refDivLista){
    const newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    refDivLista.appendChild(newCheckbox);
    newCheckbox.addEventListener('click', riscarTarefa);
}
function criarP(refDivLista, texto){
    const newP = document.createElement('p');
    newP.textContent = texto;
    const styleNp = newP.style;
    styleNp.wordWrap = 'break-word';
    styleNp.maxHeight = '100px'; 
    styleNp.overflowY = 'auto'; 
    styleNp.flex = 1;
    styleNp.display = 'flex';
    styleNp.flexDirection = 'column';
    refDivLista.appendChild(newP);
    return newP;
}
function criarButtonEdite(refDivLista){
    const newButtonEdite = document.createElement('button');
    newButtonEdite.textContent = 'Editar';
    const styleBed = newButtonEdite.style;
    styleBed.width = '50px';
    styleBed.height = '30px';
    styleBed.backgroundColor = 'rgb(216, 216, 142)';
    styleBed.border = 'none';
    styleBed.borderRadius = '0.5rem';
    styleBed.padding = '0.3rem';
    styleBed.cursor = 'pointer';
    refDivLista.appendChild(newButtonEdite);
    newButtonEdite.addEventListener('click', editarTarefa);
}
function criarButtonExcluir(refDivLista){
    const newButtonExcluir = document.createElement('button');
    newButtonExcluir.textContent = 'Excluir';
    const styleBe = newButtonExcluir.style;
    styleBe.width = '50px';
    styleBe.height = '30px';
    styleBe.backgroundColor = 'rgb(207, 118, 118)';
    styleBe.border = 'none';
    styleBe.borderRadius = '0.5rem';
    styleBe.padding = '0.3rem';
    styleBe.cursor = 'pointer';
    refDivLista.appendChild(newButtonExcluir);
    newButtonExcluir.addEventListener('click', excluirTarefa);
}
//functions: adicionar tarefa,editar,excluir
function adicionarTarefa(e){
    const input = document.querySelector('.input');
    if(input.value.trim() !== '') {
        const refDivLista = criarDivLista();
        const inputValue = input.value;
        criarCheckbox(refDivLista);
        criarP(refDivLista, inputValue);
        criarButtonEdite(refDivLista);
        criarButtonExcluir(refDivLista);
        input.value = '';
    } else {
        alert('O campo não pode estar vazio.')
    }
}document.addEventListener('keydown', (e) => {
    const input = document.querySelector('.input');
    if (e.key === 'Enter') {
        if(input.value !== '') {
            adicionarTarefa();
        }
    }
});
function excluirTarefa(e){
    const btnExcluir = e.target;
    const refDivLista = btnExcluir.parentElement;
    refDivLista.remove();
} excluirTarefa()
function editarTarefa(e){
    const btnEditar = e.target;
    const divLista = btnEditar.parentElement;
    const p = divLista.querySelector('p');
    const textarea = document.createElement('textarea');
    textarea.style.width = '300px';
    textarea.value = p.textContent;
    divLista.replaceChild(textarea, p);
    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if(textarea.value !== '') {
                divLista.replaceChild(p, textarea);
                p.textContent = textarea.value;
            }
        }
    })
    textarea.addEventListener('blur', (e) => {
        if (textarea.value !== '') {
            divLista.replaceChild(p, textarea);
            p.textContent = textarea.value;
        } else {
            alert('O camo não pode estar vazio');
        }
    });
}
function riscarTarefa(e){
    const checkbox = e.target;
    const p = checkbox.nextElementSibling; 
    if(checkbox.checked){
        p.style.textDecoration = 'line-through';
    }else{
        p.style.textDecoration = 'none';
    }
}