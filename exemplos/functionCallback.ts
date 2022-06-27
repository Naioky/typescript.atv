function somarValoresNumericos (num1: number, num2: number): number{
    return num1 + num2;
}

console.log (somarValoresNumericos(1, 4));


function printarValoresNumericos (num1: number, num2: number):void{
    console.log(num1 + num2);
}



function somarValoresNumericos2 (num1: number, num2: number, callback: (num: number) => number): number {
    let resultado = num1 + num2;
    return callback(resultado);
}


function aoQuadrado (numero: number):number {
    return numero*numero;
}

function dividirPorNumero (numero: number): number{
    return numero / numero;
}

console.log (somarValoresNumericos2(1,3, aoQuadrado));
console.log (somarValoresNumericos2(1,3, dividirPorNumero));