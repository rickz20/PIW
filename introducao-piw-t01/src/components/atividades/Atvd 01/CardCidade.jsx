import "./Style.css";

const CardCidade = ({nome, img, votos}) => {
    return (
        <>
            <div className="cidade_card">
                <img src="https://placehold.co/300" alt="" />
                <div className="cidade_infos">
                    <h2 className="nome">Quixada</h2>
                    <p className="votos">Votos: 10</p>
                </div>
            </div>
        </>
    )
}

export default CardCidade;