const linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

const linguaEspanol = document.createElement("script");
linguaEspanol.src = "idiomas/espanol.js";
document.head.appendChild(linguaEspanol);

selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function () {
    translate(this.value)
});

function translate(idioma) {
    const traducao = (idioma == "br") ? portuguese() 
    : (idioma == "es") ? espanol() 
    // : (idioma == "en") ? english() 
    // : (idioma == "fr") ? francais()
    :  null;
    setlanguage(traducao);
}

function setlanguage(traducao) {
    btSoma = document.getElementById("btAdi");
    btSubtracao = document.getElementById("btSub");
    btMultiplicacao = document.getElementById("btMulti");
    btDivisao = document.getElementById("btDiv");
    titulo = document.getElementById("titulo");
    boasVindas = document.getElementById("boasVindas");

    btSoma.value = traducao.soma;
    btSubtracao.value = traducao.subtracao;
    btDivisao.value = traducao.divisao;
    btMultiplicacao.value = traducao.multiplicacao;
    titulo.innerHTML = traducao.titulo;
    boasVindas.innerHTML = traducao.boasVindas;
}