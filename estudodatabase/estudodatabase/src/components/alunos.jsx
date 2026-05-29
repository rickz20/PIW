import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";

const BuscarAlunos = () =>{
    const [alunos, setAlunos] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() =>{
        async function carregarAlunos() {
            try {
                const querySnapshot = await getDocs(collection(db, "alunos"));
                const listaAlunos = []

                querySnapshot.forEach((doc)=>{
                    listaAlunos.push({id: doc.id, ...doc.data() });
                })

                setAlunos(listaAlunos);
            } catch (error) {
                console.error("erro ao carregar alunos", error)
            } finally {
                setCarregando(false)
            }
        }
        carregarAlunos();
    },[])

    if (carregando){
        return <p>carregando alunos...</p>
    } 

    return (
        <div>
            <h2>lista de alunos</h2>
            
            {alunos.length === 0 ? (<p>nenhum aluno encontrado</p>) : (
                <ul>
                    {alunos.map((aluno)=>(
                        <li key={aluno.id}>
                            <p>Nome: {aluno.nome}</p>
                            <p>Ira: {aluno.ira}</p>
                            <img src={aluno.imagem} alt="" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BuscarAlunos;