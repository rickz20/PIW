const AlunoRepository = require("../repositories/AlunoRepositorie");

class AlunoService {
    constructor() {
        this.alunoRepository = new AlunoRepository();
    }

    async findAll() {
        const alunos = await this.alunoRepository.findAll();
        return alunos;
    }

    async findByMatricula(matricula) {
        return await this.alunoRepository.findByMatricula(matricula);
    }
}

module.exports = new AlunoService();