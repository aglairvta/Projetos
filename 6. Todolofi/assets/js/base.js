const btntasksAdd = document.querySelector('.tasks-add');
const tasks = document.querySelector('.tasks');
const inputAdd = document.querySelector('.input-add');
//add tarefa
function addTask() {
    const inputValue = inputAdd.value.trim();
    if (inputValue === '') {
        return;
    }
    const newInputCheckbox = createCheckbox();
    const buttonDelete = createDeleteButton();
    const buttonEditor = createEditButton();
    const newP = document.createElement('p');
    newP.textContent = inputValue;
    styleParagraph(newP);
    const newDiv = createTaskDiv(newInputCheckbox, newP, buttonDelete, buttonEditor);
    tasks.appendChild(newDiv);
    saveTasksToLocalStorage();
    inputAdd.value = '';
}
//criar checkbox
function createCheckbox() {
    const newInputCheckbox = document.createElement('input');
    newInputCheckbox.type = 'checkbox';
    newInputCheckbox.addEventListener('change', () => {
        if (newInputCheckbox.checked) {
            riscarP(newInputCheckbox);
        } else {
            desriscarP(newInputCheckbox);
        }
    });
    return newInputCheckbox;
}
//criar botão de exclusão
function createDeleteButton() {
    const buttonDelete = document.createElement('button');
    buttonDelete.style = `
        padding: 0.2rem;
        width: 1.5rem;
        cursor: pointer;
        background-color: #ff5678;
        color: #fff;
        border: none;
        border-radius: 0.3rem;
    `;
    const spanX = document.createElement('span');
    spanX.textContent = 'x';
    spanX.style.display = 'block';
    buttonDelete.appendChild(spanX);
    buttonDelete.addEventListener('click', () => {
        const newDiv = buttonDelete.parentElement;
        deleteTask(newDiv);
    });
    return buttonDelete;
}
//criar botão de edição
function createEditButton() {
    const buttonEditor = document.createElement('img');
    buttonEditor.src = 'https://cdn.icon-icons.com/icons2/620/PNG/96/pencil-striped-symbol-for-interface-edit-buttons_icon-icons.com_56782.png';
    buttonEditor.style = `
        width: 1rem;
        cursor: pointer;
    `;
    buttonEditor.addEventListener('click', () => {
        const newDiv = buttonEditor.parentElement;
        editarTask(newDiv);
    });
    return buttonEditor;
}
//style p
function styleParagraph(p) {
    p.style = `
        max-width: 120px;
        word-wrap: break-word;
    `;
}
//criar div da tarefa
function createTaskDiv(newInputCheckbox, newP, buttonDelete, buttonEditor) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    newDiv.appendChild(newInputCheckbox);
    newDiv.appendChild(newP);
    newDiv.appendChild(buttonDelete);
    newDiv.appendChild(buttonEditor);
    return newDiv;
}
//excluir tarefa
    function deleteTask(newDiv) {
    tasks.removeChild(newDiv);
    saveTasksToLocalStorage();
}
//editar tarefa
    function editarTask(newDiv) {
    const pElement = newDiv.querySelector('p');
    const currentText = pElement.textContent;
    const textareaElement = document.createElement('textarea');
    textareaElement.value = currentText;
    styleTextarea(textareaElement);
    newDiv.replaceChild(textareaElement, pElement);
    textareaElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            salvarEdicao(newDiv, textareaElement.value);
        }
    });
    textareaElement.addEventListener('blur', () => {
        salvarEdicao(newDiv, textareaElement.value);
    });
    textareaElement.focus();
}
//style textarea
    function styleTextarea(textarea) {
    textarea.style = `
        margin: 0.5rem;
        width: 30%;
        resize: none;
        font-family: inherit;
        font-size: inherit;
        padding: 0.2rem;
    `;
}
//salvar edição
    function salvarEdicao(newDiv, newText) {
    if (newText.trim() === '') {
        alert('O campo não pode estar vazio.');
        return;
    }
    const newP = document.createElement('p');
    newP.textContent = newText;
    styleParagraph(newP);
    newDiv.replaceChild(newP, newDiv.querySelector('textarea'));
    saveTasksToLocalStorage();
}
//riscar parágrafo
    function riscarP(checkbox) {
    const p = checkbox.nextSibling;
    p.style.textDecoration = 'line-through';
}
//desriscar parágrafo
function desriscarP(checkbox) {
    const p = checkbox.nextSibling;
    p.style.textDecoration = 'none';
}
btntasksAdd.addEventListener('click', addTask);
btntasksAdd.style.cursor = 'pointer';
inputAdd.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
//salvar no localstorage
function saveTasksToLocalStorage() {
    const taskDivs = tasks.querySelectorAll('.newDiv');
    const taskList = [];
    taskDivs.forEach(div => {
        const taskText = div.querySelector('p').textContent;
        taskList.push(taskText);
    });
    localStorage.setItem('tasks', JSON.stringify(taskList));
}
document.addEventListener('DOMContentLoaded', () => {
    loadTasksFromLocalStorage();
});
function loadTasksFromLocalStorage() {
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.forEach(taskText => {
        const newInputCheckbox = createCheckbox();
        const buttonDelete = createDeleteButton();
        const buttonEditor = createEditButton();
        const newP = document.createElement('p');
        newP.textContent = taskText;
        styleParagraph(newP);
        const newDiv = createTaskDiv(newInputCheckbox, newP, buttonDelete, buttonEditor);
        tasks.appendChild(newDiv);
    });
}