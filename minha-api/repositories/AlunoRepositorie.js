const AlunoModel = require("../models/AlunoModel");

const alunos = [
    new AlunoModel("571132", "Rick", "https://link-da-foto.jpg"),
    new AlunoModel("571126", "jv", "https://link-da-foto.jpg"),
    new AlunoModel("57155", "rafa", "https://link-da-foto.jpg")
];

class AlunoRepository {
    async findAll() {
        return Promise.resolve(alunos);
    }

    async findByMatricula(matricula) {
        const aluno = alunos.find(a => a.matricula === matricula);
        return Promise.resolve(aluno);
    }
}

module.exports = AlunoRepository;