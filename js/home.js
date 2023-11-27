let token = sessionStorage.getItem('token');
if (token === null){
    window.location.href = 'index.html';
    alert('Você não está autenticado. É necessário fazer o login primeiro.');

}
function sair(){
    sessionStorage.removeItem('token');
    window.location.href = 'index.html';
}
const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (atleta) => {

    const container_atleta = document.createElement('div');
    container_atleta.id = 'container_atleta';
    const titulo = document.createElement('h3');
    titulo.id = 'nome_atleta';
    titulo.innerHTML = atleta.nome;
    const imagens = document.createElement('img');
    imagens.id = 'imagens';
    imagens.src = atleta.imagem;
    const saiba_mais = document.createElement('h3');
    saiba_mais.innerHTML = "Saiba mais"
    saiba_mais.id = 'saiba_mais'

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagens);
    container_atleta.appendChild(saiba_mais)
    
    container_atleta.addEventListener('click', function() {
        const urlDetalhesAtleta = `detalhes.html?id=${atleta.id}`;
        window.location.href = urlDetalhesAtleta;
        
    });

    div_container.appendChild(container_atleta);
}

function limparconteudo(){
    div_container.innerHTML = "";
}

document.getElementById('Todos').addEventListener('click', function(){
    limparconteudo();

    jogadores.forEach((atleta) => (cria_cartao(atleta)));

  
})

document.getElementById('Masculino').addEventListener('click', function(){
    limparconteudo();
    masculino.forEach((atleta) => (cria_cartao(atleta)));
      
    })

document.getElementById('Feminino').addEventListener('click', function(){
    limparconteudo();
    feminino.forEach((atleta) => (cria_cartao(atleta)));
          
     })    

document.getElementById('selecao').addEventListener('change', function(){
    limparconteudo();
    
    const selecao = this.value;
    let listaAtletas;

    if (selecao === "masculino") {
        listaAtletas = masculino;
    } else if (selecao === "feminino") {
        listaAtletas = feminino;
    } else if (selecao === "jogadorestodos") {
        listaAtletas = jogadores;
    }
    listaAtletas.forEach((atleta) => { cria_cartao(atleta);
   
})
})