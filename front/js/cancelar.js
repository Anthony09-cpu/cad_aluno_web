// Limpa campos input
btnCancelar.addEventListener('click', function () {
    limparCampos();

    if(!hiddenBtn){
        btnCasdatrar.classList.toggle('hidden');
        btnAlterar.classList.toggle('hidden');
        btnRemover.classList.toggle('hidden');
        btnCancelar.classList.toggle('hidden');
        hiddenBtn = true;
    }
})
function limparCampos() {
    id.value = "";
    nome.value = "";
    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
}