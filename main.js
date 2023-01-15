function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)
    if (elemento == null){
        console.log("Elemento não encontrado");
    }
    if (elemento != null && elemento.localName === 'audio'){
        //!= significa diferente e o && signifia dentro dessa função quer se o elemento for diferente
        //de nulo E tbm possuir o nome audio irá executar.
            elemento.play();
        }
    }
// elemento.play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador ++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idAudio);

    }
    tecla.onkeydown = function(evento){
        if (evento.code === 'Enter' || evento.code === 'Space') {
            //A || significa OU
            tecla.classList.add('ativa');
            }
    }
        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
    }
}