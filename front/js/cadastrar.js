btnCasdatrar.addEventListener('click', function (event) {
    // Verificar se os campos nao estao vazios antes de realizar o cadastro
    if (nome.value.trim() === "" || nota1.value.trim() === "" || nota2.value.trim() === "" || nota3.value.trim() === "") {
        alert("Por favor, preencha todos os campos!");
        event.preventDefault();
    } else {
        alert("Cadastro realizado com sucesso!");
        cadastrar();
        limparCampos();
    }
});

function cadastrar() {
    fetch("http://localhost:8080", {
        headers: {
            'Content-Type': 'application/JSON'
        },
        method: "POST",
        body: JSON.stringify({
            "nome": nome.value,
            "nota1": nota1.value,
            "nota2": nota2.value,
            "nota3": nota3.value
        })
    })
        .then(resposta => resposta.json())
        .then(aluno => inserirAluno)
        .catch(console.error())
};