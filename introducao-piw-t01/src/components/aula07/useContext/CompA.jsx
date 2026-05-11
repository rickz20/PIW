//useContext
import CompB from "./CompB"

//primeiro de tudo importar o createContext
import { useState, createContext } from "react"

//criação do contexto fora - se criar dentro ele cria novamente
//Com primeira letra maiuscula
const UsuarioContext = createContext(null)
const ThemaContext = createContext("light");

//useContext vale apenas para os filhos do componente, quam está abaixo dele na hierarquia
const CompA = () => {
    const [usuario, setUsuario] = useState("Belmond")

    return (
        //cria o contexto engoblando toda a aplicação
        <UsuarioContext value={usuario}>
            <ThemaContext value="dark">
                <div>
                    <h1>Sou o componente A</h1>
                    <CompB />
                </div>
            </ThemaContext>
        </UsuarioContext>
    )
}

//precisa exportar mais de um componente pra chamar depois
export { CompA, UsuarioContext, ThemaContext }