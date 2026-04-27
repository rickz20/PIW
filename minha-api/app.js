const express = require("express");
const path = require("path");

const ProfessorRouter = require("./routers/ProfessorRouter");
const AlunoRouter = require("./routers/AlunoRouter");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/piwt01/professor", ProfessorRouter);
app.use("/api/piwt01/aluno", AlunoRouter);

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}/api/piwt01/aluno`);
});