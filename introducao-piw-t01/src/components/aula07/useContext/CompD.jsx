//useContext

import { useContext } from "react"
import { UsuarioContext } from "./CompA"

const CompD = () =>{
    const usuario = useContext(UsuarioContext)
    return (
        <div>
            <h1>Sou o componente D</h1>
            <h3>O usuário é {usuario} </h3>
        </div>
    )
}

export default CompD