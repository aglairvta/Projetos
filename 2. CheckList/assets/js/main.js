    function adicionarNota() {
        let notaInput = document.getElementById("notaInput");
        let nota = notaInput.value;

        if (nota !== "") {
            let novoItem = document.createElement("div");
            novoItem.className = "item";

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = nota;
            checkbox.onmouseover = function () {
                this.style.cursor = "pointer";
            };

            let label = document.createElement("label");
            label.textContent = nota;
            label.spellcheck = false;

            let editButton = document.createElement("button");
            editButton.className = "editButton";
            editButton.onclick = function () {
                label.contentEditable = true;
                label.focus();
            };

            //icone edição
            editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>`;

            let deleteButton = document.createElement("button");
            deleteButton.className = "deleteButton";
            deleteButton.onclick = function () {
                novoItem.remove();
            
                let notas = JSON.parse(localStorage.getItem('notas')) || [];
                notas = notas.filter(item => item !== nota);
                localStorage.setItem('notas', JSON.stringify(notas));
            };

            //icone exclusão
            deleteButton.innerHTML = `<svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" fill="red"/></svg>`;

            novoItem.appendChild(checkbox);
            novoItem.appendChild(label);
            novoItem.appendChild(editButton);
            novoItem.appendChild(deleteButton);

            let checkList = document.getElementById("checkListV.A");
            checkList.appendChild(novoItem);

            let notas = JSON.parse(localStorage.getItem('notas')) || [];
            notas.push(nota);
            localStorage.setItem('notas', JSON.stringify(notas));

            notaInput.value = "";
        }
    }

        document.getElementById("notaInput").addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                adicionarNota();
            }
        });

        window.addEventListener('DOMContentLoaded', () => {
            const notas = JSON.parse(localStorage.getItem('notas')) || [];
            notas.forEach(nota => {
                let novoItem = document.createElement("div");
                novoItem.className = "item";

                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.value = nota;
                checkbox.onmouseover = function () {
                    this.style.cursor = "pointer";
                };

                let label = document.createElement("label");
                label.textContent = nota;
                label.spellcheck = false;

                let editButton = document.createElement("button");
                editButton.className = "editButton";
                editButton.onclick = function () {
                    label.contentEditable = true;
                    label.focus();
                };

                editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>`;

                let deleteButton = document.createElement("button");
                deleteButton.className = "deleteButton";
                deleteButton.onclick = function () {
                    novoItem.remove();
                    
                    let notas = JSON.parse(localStorage.getItem('notas')) || [];
                    notas = notas.filter(item => item !== nota);
                    localStorage.setItem('notas', JSON.stringify(notas));
                };

                deleteButton.innerHTML = `<svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" fill="red"/></svg>`;

                novoItem.appendChild(checkbox);
                novoItem.appendChild(label);
                novoItem.appendChild(editButton);
                novoItem.appendChild(deleteButton);

                let checkList = document.getElementById("checkListV.A");
                checkList.appendChild(novoItem);
            });
        });
