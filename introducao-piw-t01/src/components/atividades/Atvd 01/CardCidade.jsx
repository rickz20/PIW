import "./Style.css";

const CardCidade = ({nome, img, votos}) => {
    return (
        <>
            <div className="cidade_card">
                <img src="https://1.bp.blogspot.com/-peiVmhWiyuc/XZPD-BcSErI/AAAAAAAAEKI/rcJCrfuMXFosrlOMy8F_c0R6K3wiJwSRQCLcBGAsYHQ/s1600/Monumento%2BNatural%2BMon%25C3%25B3litos%2Bde%2BQuixad%25C3%25A1%2B001.jpg" alt="" />
                <div className="cidade_infos">
                    <h2 className="nome">Quixada</h2>
                    <p className="votos">Votos: 10</p>
                </div>
            </div>
        </>
    )
}

export default CardCidade;