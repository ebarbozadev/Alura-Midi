// Armazenando as tags dos áudios
const listaDeSom = document.querySelectorAll('audio');
// Armazenando os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

// Criando função para tocar som
function tocaSom(seletor) {
    const elemento = document.querySelector(seletor);

    if (elemento === null || elemento.localName !== 'audio'){
        console.log('Elemento não encontrado');
    } else {
        elemento.play();
    }
}

for (let i = 0; i < listaDeTeclas.length; i++) {
    // Armazenando as teclas
    const tecla = listaDeTeclas[i];
    // Armazenar o instrumento
    const instrumento = tecla.classList[1];
    // Armazenar o ID dos instrumentos
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    // onKeyDown = é uma função que executa quando a tecla estiver abaixada
    tecla.onkeydown = function (evento) {
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    // onKeyUp = é uma função que executa quando a tecla for levantada
    tecla.onkeyup = function (evento) {
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.remove('ativa');
        }
    }
}