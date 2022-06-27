let valorAny: any;
valorAny = 1;
valorAny = 'ola';
valorAny = true;



let valorString: string = 'test';
valorString = valorAny;
let valorString2: string = 'testao';
valorString2 = valorAny;



function somaString (string1: string, string2: string){
    console.log(string1 + string2);
}


somaString(valorString, valorString2);
somaString('ola ', ' como vai?');