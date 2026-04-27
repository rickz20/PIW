const express = require("express");
const alunoService = require("../services/AlunoService"); // 'a' minúsculo como no print
const router = express.Router();

router.get("/", async (request, response) => {
    const alunos = await alunoService.findAll();
    response.json(alunos);
});

router.get("/:matricula", async (request, response) => {
    const { matricula } = request.params;
    const aluno = await alunoService.findByMatricula(matricula);
    
    if (!aluno) {
        return response.status(404).json({ message: "Aluno não encontrado" });
    }
    
    response.json(aluno);
});

module.exports = router;