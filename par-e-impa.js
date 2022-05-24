//EXERCÍCIO 02: Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar 1 se o número for par e 0 se for ímpar.

function numberPar(number) {    
    if(number % 2 !== 0) {
        console.log("É par.");
        return 1;
    } else {
        console.log("É ímpar.");
        return 0;
    }
}