let id = document.getElementById("id");
let nome = document.getElementById("nome");
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");

function selecionar(){
    let btnsSelecionar = document.querySelectorAll(".btn-success");
    let arrayBtnsSelecionar = Array.from(btnsSelecionar);
    arrayBtnsSelecionar.forEach(btn => {
        btn.addEventListener('click', function(){
            const linha = this.closest("tr");
            id.value = linha.querySelector(".col-id");
            nome.value = linha.querySelector(".col-nome");
            nota1.value = linha.querySelector(".col-nota1");
            nota2.value = linha.querySelector(".col-nota2");
            nota3.value = linha.querySelector(".col-nota3");
        });
    });
};
