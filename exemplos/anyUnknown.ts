let anyDeVolta: any;
anyDeVolta = 3;
anyDeVolta = 'simsim';
anyDeVolta = '-3';

let stringTest: string = 'verificar';
stringTest = anyDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = 'vai sim';


let stringTest2: string = 'agora vai';


if (typeof unknownValor === 'string'){
    stringTest2 = unknownValor;
}


function jogarAe (erro: string, codigo: number): never{
    throw {error: erro, code: codigo}
}


console.log(jogarAe('deu erro', 500));