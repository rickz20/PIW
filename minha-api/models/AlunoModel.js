class ProfessorModel{
    constructor (id, nome, imagem){
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;

        this.dataCriação = new Date();
        this.status = "ATIVADO";
    }
}

module.exports = ProfessorModel