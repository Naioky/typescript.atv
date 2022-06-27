"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somatorio(num1, num2, devePrintar, frase) {
    let resultado = num1 + num2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return console.log(num1 + num2);
}
let devePrintar = true;
let frase = "o valor é: ";
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            return somatorio(Number(input1.value), Number(input2.value), devePrintar, frase);
        }
    });
}
