function selecionar(){
    let btnsSelecionar = document.querySelectorAll(".btn-success");
    let arrayBtnsSelecionar = Array.from(btnsSelecionar);

    arrayBtnsSelecionar.forEach(btn => {

        btn.addEventListener('click', function(){

            const linha = this.closest("tr");

            id.value = linha.querySelector(".col-id").innerText;
            nome.value = linha.querySelector(".col-nome").innerText;
            nota1.value = linha.querySelector(".col-nota1").innerText;
            nota2.value = linha.querySelector(".col-nota2").innerText;
            nota3.value = linha.querySelector(".col-nota3").innerText;

            if(hiddenBtn){
                btnCasdatrar.classList.toggle('hidden');
                btnAlterar.classList.toggle('hidden');
                btnRemover.classList.toggle('hidden');
                btnCancelar.classList.toggle('hidden');
                hiddenBtn = false;
            }

        });
    });
};
