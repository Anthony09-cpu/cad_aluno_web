btnRemover.addEventListener('click', function(){
    remover();
    botoes();
    limparCampos();
});

function remover(){
    fetch("http://localhost:8080/"+ id.value,{
        headers:{
            'Content-Type':'application/JSON'
        },
        method:"DELETE"
        
    })
    .catch(console.error())
};