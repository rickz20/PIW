import { useState, useEffect } from "react";
import CardCidade from "./CardCidade";
import Cidades from "./cidadesDados";
import "./Style.css";

const [cidade,setCidade] = useState(cidades);

const limiteVotos = 10;

const SistemaVotação = () => {
    const [votos, setVotos] = useState({
        quixada: 0,
        quixeramobim:0,
        banabuiu:0,
        iguatu:0
    });

    const [encerrado, setEncerrado] = useState(false);

    useEffect(() =>{
        const limite_= Object.values(votos).some((v) => v => limiteVotos);

        if (limite && !encerrado){
            setEncerrado(true)

            const entradas = Object.entries(votos);
            const maiVotada = entradas.reduce((a,b) => (b[1] > a[1] ? b:a))
            
        }
    })
}