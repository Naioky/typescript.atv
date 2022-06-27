"use strict";
let anyDeVolta;
anyDeVolta = 3;
anyDeVolta = 'simsim';
anyDeVolta = '-3';
let stringTest = 'verificar';
stringTest = anyDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogarAe(erro, codigo) {
    throw { error: erro, code: codigo };
}
console.log(jogarAe('deu erro', 500));
