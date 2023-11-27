document.addEventListener('DOMContentLoaded', function() {
  const infoJogador = document.getElementById('info');
  const fotoInfo = document.getElementById('foto_jog');
  const detalhess = document.getElementById('detalhess');

  const jogadorAtual = getCurrentPlayerData();

  const imgJogador = document.createElement('img');
  imgJogador.src = jogadorAtual.imagem;
  imgJogador.style.width = '200px';

  const nomeJogador = document.createElement('h2');
  nomeJogador.innerHTML = jogadorAtual.nome;

  const posicaoJogador = document.createElement('p');
  posicaoJogador.innerHTML = `Posição: ${jogadorAtual.posicao}`;

  const nomeCompletoJogador = document.createElement('p');
  nomeCompletoJogador.innerHTML = `Nome Completo: ${jogadorAtual.nomeCompleto}`;

  const nascimentoJogador = document.createElement('p');
  nascimentoJogador.innerHTML = `Nascimento: ${jogadorAtual.nascimento}`;

  const alturaJogador = document.createElement('p');
  alturaJogador.innerHTML = `Altura: ${jogadorAtual.altura}`;

  const descricaoJogador = document.createElement('p');
  descricaoJogador.innerHTML = jogadorAtual.descricao;

  fotoInfo.appendChild(imgJogador);
  detalhess.appendChild(nomeJogador);
  detalhess.appendChild(posicaoJogador);
  detalhess.appendChild(nomeCompletoJogador);
  detalhess.appendChild(nascimentoJogador);
  detalhess.appendChild(alturaJogador);
  detalhess.appendChild(descricaoJogador);

  const voltarButton = document.createElement('button');
  voltarButton.innerHTML = 'Voltar';
  voltarButton.addEventListener('click', function() {
    window.history.back();
  });

  infoJogador.appendChild(voltarButton);
});

function getCurrentPlayerData() {
  const jogadorAtual = {
      nome: localStorage.getItem('@Nome'),
      posicao: localStorage.getItem('@Posicao'),
      imagem: localStorage.getItem('@Imagem'),
      descricao: localStorage.getItem('@Descricao'),
      nomeCompleto: localStorage.getItem('@NomeCompleto'),
      nascimento: localStorage.getItem('@Nascimento'),
      altura: localStorage.getItem('@Altura')
  };

  return jogadorAtual;
}
