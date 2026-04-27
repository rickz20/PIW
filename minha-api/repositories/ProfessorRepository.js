const ProfessorModel = require("../models/ProfessorModel")

const professores = [
    new ProfessorModel(1,"jefferson", "https://www.quixada.ufc.br/docente/jefferson-de-carvalho-silva/"),
    new ProfessorModel(2, "Ingrid", "https://www.quixada.ufc.br/docente/ingrid-teixeira-monteiro/"),
    new ProfessorModel(3, "Rochelle", "https://www.quixada.ufc.br/docente/rochelle-silveira-lima/")

]

class ProfessorRepository{

    
     async findALL(){
        return Promise.resolve(professores);
    }

    findByID(){

    }
}

module.exports = ProfessorRepository;
