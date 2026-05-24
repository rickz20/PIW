import { useRef, useState } from "react"

const RevisaoRef = () => {
    let contadorref = useRef(0)
        
    function aumentarContadorref(){
        contadorref.current = contadorref.current +1
    }

    function aumentarContadorState(){
        setContadorState(
            (contadorAnterior) =>{
                return contadorAnterior + 135
            }
        )
    }

    const [contadorState, setContadorState] = useState(0)

    return <>
    <h1>revisao useRef</h1>
    <h3>contador: {contadorState}</h3>
    <button onClick={aumentarContadorState}>contar</button>
    </>
}

export default RevisaoRef