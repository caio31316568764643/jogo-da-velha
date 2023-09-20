var jogador, vencedor = null;

var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

// inicializa o jgo com o jogador x
mudarJogador('X');

// função para atualizar o jogador atual na interface do jogo
function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function escolherQuadrado(id) {
  // verifica o id pego
  // console.log(id)

  if (vencedor !== null) {
    return;
  }

  // obtem o elemento do quadrado clicado pelo id
  var quadrado = document.getElementById(id);

  if (quadrado.innerHTML !== "-") {
    return;
  }

  // define o conteúdo do quadrado com o símbolo do jogador atual ('X' ou 'O')
  quadrado.innerHTML = jogador;

  // altera para o próximo jogador 
  if (jogador === 'X'){
    jogador = 'O';
  } else {
    jogador = 'X'
  }

  mudarJogador(jogador);
  checaVencedor();
}

function checaVencedor() {
  // obtem os elementos dos quadrados para todas as possiveis sequencias vencedoras
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);  


  if (checaSequencia(quadrado1, quadrado2, quadrado3)){
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;
  }
  if (checaSequencia(quadrado4, quadrado5, quadrado6)){
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;
  }
  if (checaSequencia(quadrado7, quadrado8, quadrado9)){
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;
  }
  if (checaSequencia(quadrado1, quadrado4, quadrado7)){
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    return;
  }
  if (checaSequencia(quadrado2, quadrado5, quadrado8)){
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;
  }
  if (checaSequencia(quadrado3, quadrado6, quadrado9)){
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;
  }
  if (checaSequencia(quadrado1, quadrado5, quadrado9)){
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;
  }
  if (checaSequencia(quadrado3, quadrado5, quadrado7)){
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
    return;
  }

}  

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
quadrado1.style.background = 'lightgray';
quadrado2.style.background = 'lightgray';
quadrado3.style.background = 'lightgray';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
  var eIgual = false;

  if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    eIgual = true;
  }

  return eIgual;
}

function reniciar () {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    var quadrado1 = document.getElementById(1);
    quadrado1.style.background = 'rgb(247, 251, 2)';
    quadrado1.style.color = 'rgb(0, 243, 122)';
    quadrado1.innerHTML = '-';

    var quadrado2 = document.getElementById(2);
    quadrado2.style.background = 'rgb(247, 251, 2)';
    quadrado2.style.color = 'rgb(0, 243, 122)';
    quadrado2.innerHTML = '-';


    var quadrado3 = document.getElementById(3);
    quadrado3.style.background = 'rgb(247, 251, 2)';
    quadrado3.style.color = 'rgb(0, 243, 122)';
    quadrado3.innerHTML = '-';

    var quadrado4 = document.getElementById(4);
    quadrado4.style.background = 'rgb(247, 251, 2)';
    quadrado4.style.color = 'rgb(0, 243, 122)';
    quadrado4.innerHTML = '-';

    var quadrado5 = document.getElementById(5);
    quadrado5.style.background = 'rgb(247, 251, 2)';
    quadrado5.style.color = 'rgb(0, 243, 122)';
    quadrado5.innerHTML = '-';

    var quadrado6 = document.getElementById(6);
    quadrado6.style.background = 'rgb(247, 251, 2)';
    quadrado6.style.color = 'rgb(0, 243, 122)';
    quadrado6.innerHTML = '-';

    var quadrado7 = document.getElementById(7);
    quadrado7.style.background = 'rgb(247, 251, 2)';
    quadrado7.style.color = 'rgb(0, 243, 122)';
    quadrado7.innerHTML = '-';

    var quadrado8 = document.getElementById(8);
    quadrado8.style.background = 'rgb(247, 251, 2)';
    quadrado8.style.color = 'rgb(0, 243, 122)';
    quadrado8.innerHTML = '-';

    var quadrado9 = document.getElementById(9);
    quadrado9.style.background = 'rgb(247, 251, 2)';
    quadrado9.style.color = 'rgb(0, 243, 122)';
    quadrado9.innerHTML = '-';
    

    mudarJogador('X');
}