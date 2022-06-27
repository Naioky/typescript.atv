"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
};
pessoa.idade = 28;
var andre;
var paula;
var profissao;
(function (profissao) {
    profissao[profissao["Atriz"] = 0] = "Atriz";
    profissao[profissao["Professora"] = 1] = "Professora";
    profissao[profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    profissao[profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(profissao || (profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 22,
    profissao: profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 23,
    profissao: profissao.Professora,
    materias: ['Matematica', 'Portugues', 'Fisica']
};
const monica = {
    nome: 'Monica',
    idade: 19,
    materias: ['Matematica', 'Portugues', 'Fisica']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' ', item);
    }
}
listar(monica.materias);
