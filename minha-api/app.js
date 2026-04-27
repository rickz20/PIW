const express = require("express")
const path = require("path");


const ProfesorRouter = require("./routers/ProfessorRouter");

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "..", "public")))
app.use("/api/piwt01",ProfesorRouter)

app.listen(
    port,
    () => {
        console.log(`API executando em http://localhost${port}/api/piwt01/professor`)
    }
)