import { useState, useEffect } from "react";
import CardCidade from "./CardCidade";
import "./Style.css";

const cidades = [
    {
        id: "quixada",
        nome: "Quixadá",
        img: "https://1.bp.blogspot.com/-peiVmhWiyuc/XZPD-BcSErI/AAAAAAAAEKI/rcJCrfuMXFosrlOMy8F_c0R6K3wiJwSRQCLcBGAsYHQ/s1600/Monumento%2BNatural%2BMon%25C3%25B3litos%2Bde%2BQuixad%25C3%25A1%2B001.jpg"
    },
    {
        id: "quixeramobim",
        nome: "Quixeramobim",
        img: "https://th.bing.com/th/id/R.97b8b0c06aae4be781e06753b372761a?rik=b5e8%2fDj8pRtLNw&pid=ImgRaw&r=0"
    },
    {
        id: "banabuiu",
        nome: "Banabuiú",
        img: "https://tse3.mm.bing.net/th/id/OIP.rShqD7-y1B4G6G-0uVQqtAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "iguatu",
        nome: "Iguatu",
        img: "https://www.jornalapraca.com.br/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-20-at-13.06.39-1024x576.jpeg"
    }
]

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