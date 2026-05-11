import { useState } from "react"

const EstudoDoRef = () =>{
    //solução 1 - conta mas não renderiza
    // let contador = 0
    const ContadorRef = 0

    function contarLet(){
        contador ++
        console.log(contador)
    }

    //solução 2
    const [contador, setContador] = useState(0)
    function contarState() {
        setContador(contador + 1)
    }



    return(
        <div>
            <h1>contador: {contador}</h1>
            <button onClick={contarState}>Contar!</button>
        </div>
    )
}

export default EstudoDoRef