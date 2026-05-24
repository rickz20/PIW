import PerfilNutricionista from "../components/perfil-nutricionista"
import NavBar from "../components/navbar"

function App() {

  return (
    <>
      <NavBar />
      <PerfilNutricionista
        nome={"Fulano de tal"}
        especializacao={"nutricionista clinica"}
        sobre={"lorem ipsum dolor set a mir lorem ipsum dolor set a mirlorem ipsum dolor set a mirlorem ipsum"}
        telefone={"(88) 9 9999-999"}
        email={"fulano@gmail.com"}
        CRNnutri={" CRN 120370139"}
      />

    </>
  )
}

export default App
