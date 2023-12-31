fetch("http://localhost:8080")
    .then(response => response.json())
    .then(listaDeAlunos => listarAlunos(listaDeAlunos))
    .catch(console.error());

function listarAlunos(alunos) {
    console.log(alunos);

    alunos.forEach(aluno => {
        inserirAluno(aluno);
    });

    selecionar();
};

function inserirAluno(aluno) {
    const novaLinha = document.createElement("tr");
    var colunaId = document.createElement("td");
    var colunaNome = document.createElement("td");
    var colunaNota1 = document.createElement("td");
    var colunaNota2 = document.createElement("td");
    var colunaNota3 = document.createElement("td");
    var colunaMedia = document.createElement("td");
    var colunaSituacao = document.createElement("td");
    var colunaSelecionar = document.createElement("td");

    colunaId.innerText = aluno.id;
    colunaId.classList.add('col-id');
    colunaNome.innerText = aluno.nome;
    colunaNome.classList.add('col-nome');
    colunaNota1.innerText = aluno.nota1;
    colunaNota1.classList.add('col-nota1');
    colunaNota2.innerText = aluno.nota2;
    colunaNota2.classList.add('col-nota2');
    colunaNota3.innerText = aluno.nota3;
    colunaNota3.classList.add('col-nota3');

    var media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

    colunaMedia.innerText = media;

    var situacao = (media > 7 ? "Aprovado" : "Reprovado");

    colunaSituacao.innerText = situacao;

    colunaSelecionar.innerHTML = '<button id="selecionar" type="button" class="btn btn-success">Selecionar</button>';

    novaLinha.appendChild(colunaId);
    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaNota1);
    novaLinha.appendChild(colunaNota2);
    novaLinha.appendChild(colunaNota3);
    novaLinha.appendChild(colunaMedia);
    novaLinha.appendChild(colunaSituacao);
    novaLinha.appendChild(colunaSelecionar);

    document.querySelector("tbody").appendChild(novaLinha);
};