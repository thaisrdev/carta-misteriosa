const inputTexto = document.getElementById('carta-texto'); 
const botao = document.getElementById('criar-carta'); 
const resultado = document.getElementById('carta-gerada'); 
const estilos  = [
    'newspaper',
    'magazine1',
    'magazine2',
    'medium',
    'big',
    'reallybig',
    'rotateleft',
    'rotateright',
    'skewleft',
    'skewright',
  ];

  botao.addEventListener('click', gerarCarta);

  function gerarCarta(palavras) {
    let palavras = inputTexto.split('');
    let novaPalavra = document.createElement('span');
    novaPalavra.innerText = palavras;
    novaPalavra.className = estilos[Math.floor(Math.random() * estilos.length)];
    resultado.appendChild(novaPalavra);
  } 