btnAlterar.addEventListener('click', function(){
    alterar();
    limparCampos();
    botoes();
});

function alterar(){
    fetch("http://localhost:8080",{
        headers:{
            'Content-Type':'application/JSON'
        },
        method:"PUT",
        body:JSON.stringify({
            "id":id.value,
            "nome":nome.value,
            "nota1":nota1.value,
            "nota2":nota2.value,
            "nota3":nota3.value
        })
    })
    .then(resposta => resposta.json())
    .then(aluno => inserirAluno)
    .catch(console.error())
};