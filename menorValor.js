//EXERCICIO 01: Crie uma função que receba dois números inteiros retorne o menor número.

function menorValor (v1, v2){
    if(v1 < v2){
        console.log('V1 é menor que V2.');
        return v1;

    } else {
        console.log('V2 é maior que V1');
        return v2;
    }
}