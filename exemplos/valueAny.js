"use strict";
let valorAny;
valorAny = 1;
valorAny = 'ola';
valorAny = true;
let valorString = 'test';
valorString = valorAny;
let valorString2 = 'testao';
valorString2 = valorAny;
function somaString(string1, string2) {
    console.log(string1 + string2);
}
somaString(valorString, valorString2);
somaString('ola ', ' como vai?');
