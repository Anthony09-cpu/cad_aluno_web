let nome = document.getElementById("nome");
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");

let btnCadastrar = document.getElementById("cadastrar");

btnCadastrar.addEventListener('click',function(ev){
    ev.preventDefault();
    console.log(nome.value);
    cadastrar();
    limpar();
});

function cadastrar(){
    fetch("http://localhost:8080",{
        headers:{
            'Content-Type':'application/json'
        },
        method:'POST',
        body: JSON.stringify({
            "nome":nome.value,
            "nota1":nota1.value,
            "nota2":nota2.value,
            "nota3":nota3.value
        })
    })
    .then(response => response.json())
    .then(aluno => inserirAluno(aluno))
    .catch(console.error())
};

function limpar(){

    nome.value = "";
    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
};
