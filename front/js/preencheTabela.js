fetch("http://localhost:8080")
.then(response => response.json())
.then(listaDeAlunos => listarAlunos(listaDeAlunos))
.catch(console.error());

function listarAlunos(alunos){
    console.log(alunos);

    alunos.forEach(aluno => {
        const novaLinha = document.createElement("tr");
        let colunaId = document.createElement("td");
        let colunaNome = document.createElement("td");
        let colunaNota1 = document.createElement("td");
        let colunaNota2 = document.createElement("td");
        let colunaNota3 = document.createElement("td");
        let colunaMedia = document.createElement("td");
        let colunaSituacao = document.createElement("td");
        let colunaSelecionar = document.createElement("td");

        colunaId.innerText = aluno.id;
        colunaNome.innerText = aluno.nome;
        colunaNota1.innerText = aluno.nota1;
        colunaNota2.innerText = aluno.nota2;
        colunaNota3.innerText = aluno.nota3;

        let media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

        colunaMedia.innerText = media;

        let situacao = (media > 7 ? "Aprovado" : "Reprovado");

        colunaSituacao.innerText = situacao;

        colunaSelecionar.innerHTML = ""

        novaLinha.appendChild(colunaId, colunaNome, colunaNota1, colunaNota2, colunaNota3, colunaMedia, colunaSituacao, colunaSelecionar);
    });
}