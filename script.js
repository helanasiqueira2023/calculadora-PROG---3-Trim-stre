let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

valor1.addEventListener("keyup", function () {
    somar(Number(valor1.value), Number(valor2.value));
})

valor2.addEventListener("keyup", function () {
    somar(Number(valor1.value), Number(valor2.value));
})

let btSoma = document.querySelector("#btAdi");
btSoma.addEventListener("click", function () {
(Number(valor1.value), Number(valor2.value));
});

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma
}

let btSubtracao = document.querySelector("#btSub");
btSubtracao.addEventListener("click", function () {
    subtracao(Number(valor1.value), Number(valor2.value));
});

function subtracao(a, b) { 
    resultado.textContent = (a - b);
}

let btMultiplicacao = document.querySelector("#btMulti");
btMultiplicacao.addEventListener("click", function () {
    multiplicacao(Number(valor1.value), Number(valor2.value));
});

function multiplicacao(a, b) { 
    resultado.textContent = (a * b);
}

let btDivisao = document.querySelector("#btDiv");
btDivisao.addEventListener("click", function () {
    divisao(Number(valor1.value), Number(valor2.value));
});

function divisao(a, b) { 
    resultado.textContent = (a / b);
}