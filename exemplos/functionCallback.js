"use strict";
function somarValoresNumericos(num1, num2) {
    return num1 + num2;
}
console.log(somarValoresNumericos(1, 4));
function printarValoresNumericos(num1, num2) {
    console.log(num1 + num2);
}
function somarValoresNumericos2(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorNumero(numero) {
    return numero / numero;
}
console.log(somarValoresNumericos2(1, 3, aoQuadrado));
console.log(somarValoresNumericos2(1, 3, dividirPorNumero));
