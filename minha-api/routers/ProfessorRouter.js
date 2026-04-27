const express = require("express")
const ProfessorService = require("../services/professorService");
const { request } = require("node:http");

const router = express.Router()

router.get(
    "/",
    async (request, response) => {
        const professores = await ProfessorService.findALL()
        response.json(professores)
    }
)

module.exports = router;