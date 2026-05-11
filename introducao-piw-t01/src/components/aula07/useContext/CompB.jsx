//useContext
import CompC from "./CompC"
import { useContext } from "react"
import { ThemaContext } from "./CompA"

const CompB = () =>{
    const tema = useContext(ThemaContext)
    return (
        <div>
            <h1>Sou o componente B</h1>
            <h3>o tema é {tema}</h3>
            <CompC />
        </div>
    )
}

export default CompB