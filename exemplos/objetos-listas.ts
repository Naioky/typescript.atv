const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
}

pessoa.idade = 28;

var  andre: (nome: string, idade: number, profissao: string) =>{
    nome: 'Andre',
    idade: 28,
    profissao: profissao.Professora
}

var paula: (nome: string, idade: number, profissao: string) => {
    nome: 'Paula',
    idade: 22,
    profissao: profissao.Desenvolvedora
}

interface pessoa {
    nome: string,
    idade: number,
    profissao?: profissao
}

enum profissao {
    Atriz,
    Professora,
    Desenvolvedora,
    JogadoraDeFutebol
}



const vanessa: pessoa = {
    nome: 'Vanessa',
    idade: 22,
    profissao: profissao.Desenvolvedora
}


interface estudante extends pessoa {
    materias: string[]
}



const jessica: estudante = {
    nome: 'Jessica',
    idade: 23,
    profissao: profissao.Professora,
    materias: ['Matematica', 'Portugues', 'Fisica']
}

const monica: estudante = {
    nome: 'Monica',
    idade: 19,
    materias: ['Matematica', 'Portugues', 'Fisica']
}


function listar(lista: string[]){
    for(const item of lista){
        console.log(' ', item);
    }
}


listar (monica.materias);