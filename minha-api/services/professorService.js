const ProfessorRepository = require("../repositories/ProfessorRepository")

class ProfessorService{
    constructor(){
        //acessa os metodos do repository
        this.professorRepository = new ProfessorRepository()
    }

    async findALL() {

        
        const professores = await this.professorRepository.findALL()
        return professores;
    }
}

module.exports = ProfessorService;