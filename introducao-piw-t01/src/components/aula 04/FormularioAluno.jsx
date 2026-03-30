import { useState } from "react"

const FormularioAluno = () => {

    const [aluno, setAluno] = useState({nome:"",sobrenome:""})

    /*const onHandleChange = (event) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setAluno(
            (alunoAnterior) => (
                {
                    ...alunoAnterior,
                    [event.target.name]:event.target.value
                }
            )
        )
    }*/

    //v3
    const onHandleInput = (event) => {
        const {name,value} = event.target
        setAluno({...aluno, [name]:value})
    }
    //v2
   /* const onHandleNome = (event) => {
        const {name,value} = event.target
        //console.log(event.target.name)
        //console.log(event.target.value)
        setAluno({...aluno, [name]:value})
    }

    const onHandleSurname = (event) => {
        const {name,value} = event.target
        //console.log(event.target.name)
        //console.log(event.target.value)
        setAluno({...aluno, [name]:value})

    }*/

    //v1
    /*const onHandleName = (event) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setAluno({name:event.target.value, surname:aluno.surname})
    }

    const onHandleSurname = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setAluno({name:aluno.name, surname:event.target.value})

    }*/

    const onSubmit = (event) => {
        event.preventDefault()
        alert("Nome: " + aluno.nome + "\n" + "Sobrenome: " + aluno.sobrenome)
    }

    return (
        <>
            <h1>Formulário Aluno</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        id="nome"
                        type="text"
                        name="nome"
                        value = {aluno.nome}
                        placeholder="Insira o seu nome"
                        onChange={onHandleInput}
                    />
                </div>
                <div>
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input
                        id="sobrenome" 
                        type="text"
                        name="sobrenome"
                        value={aluno.sobrenome}
                        placeholder="Entre com seu sobrenome"
                        onChange={onHandleInput}
                    />
                </div>
                <div>
                    <button type="submit">ENVIAR</button>
                </div>
            </form>
        </>
    )
}

export default FormularioAluno