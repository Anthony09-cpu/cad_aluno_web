btnCasdatrar.addEventListener('click', function(){
    cadastrar();
    limparCampos();
});

function cadastrar(){
    fetch("http://localhost:8080",{
        headers:{
            'Content-Type':'application/JSON'
        },
        method:"POST",
        body:JSON.stringify({
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