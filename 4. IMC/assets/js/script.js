(function imc(){
    const form = document.querySelector('.form');
    const resultados = document.querySelector('.resultados');

    const pessoas = [];

    function recebeEventForm(evento) {
        evento.preventDefault();  //evita que atualize a paǵina

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //calculo imc   
        const imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2);

        //status imc
        const statusImc =  
               imc < 18.5 ? 'Abaixo do peso':   
               (imc >= 18.5 && imc <= 24.9) ? 'Peso ideal!':
               (imc >= 25 && imc <= 29.9) ? 'Sobrepeso':
               (imc >= 30 && imc <= 39.9) ? 'Obesidade':
                imc >=40 ? 'Obesidade grave': 
               'Erro';

        pessoas.push({
            peso: peso.value,
            altura: altura.value,
            imc: imc.toFixed(2),
            status: statusImc
        });

        //No console: 
        console.log(pessoas);

        //Na página:
        resultados.innerHTML = `IMC: ${imc.toFixed(2)} ➡︎ Status: ${statusImc}`; 
    };

    form.addEventListener('submit', recebeEventForm);
})();


    