const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();
const box = document.querySelector('.box')

function gerarNumeroAleatorio() {
    return parseInt(Math.random()* maiorValor + 1);
    
}

console.log('O número secreto é: ' + numeroSecreto);

const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerHTML = maiorValor;