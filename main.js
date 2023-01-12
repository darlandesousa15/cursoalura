function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);

listaDeTeclas{0}.onclick = tocaSomPom;
listaDeTeclas{1}.onclick = tocaSomPom;
listaDeTeclas{2}.onclick = tocaSomPom;
listaDeTeclas{3}.onclick = tocaSomPom;
listaDeTeclas{4}.onclick = tocaSomPom;
listaDeTeclas{5}.onclick = tocaSomPom;
listaDeTeclas{6}.onclick = tocaSomPom;
listaDeTeclas{7}.onclick = tocaSomPom;
listaDeTeclas{8}.onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;
