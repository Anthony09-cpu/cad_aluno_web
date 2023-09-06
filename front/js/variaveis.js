let id = document.getElementById("id");
let nome = document.getElementById("nome");
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");

let btnCasdatrar = document.getElementById("cadastrar");
let btnCancelar = document.getElementById("cancelar");
let btnAlterar = document.getElementById("alterar");
let btnRemover = document.getElementById("remover");

let hiddenBtn = true;


function limparCampos() {
    location.reload();
}

function botoes(){
    if(!hiddenBtn){
        btnCasdatrar.classList.toggle('hidden');
        btnAlterar.classList.toggle('hidden');
        btnRemover.classList.toggle('hidden');
        btnCancelar.classList.toggle('hidden');
        hiddenBtn = true;
    }
}