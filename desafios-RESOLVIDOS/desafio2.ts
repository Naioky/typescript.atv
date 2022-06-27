// Como podemos melhorar o esse código usando TS? 

type humano = {
    nome: string,
    idade: number,
    profissao: profissao
}

enum profissao {
    Padeiro,
    Atriz
}

let pessoa1: humano = {
nome: 'maria',
idade: 29,
profissao: profissao.Atriz
}

let pessoa2: humano = {
nome : 'roberto',
idade : 19,
profissao : profissao.Padeiro
}

let pessoa3: humano = {
    nome: 'laura',
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa4: humano = {
    nome : 'carlos',
    idade : 19,
    profissao : profissao.Padeiro
}
