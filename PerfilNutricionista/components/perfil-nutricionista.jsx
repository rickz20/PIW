
import "../styles/perfilNutricionista.css"

const PerfilNutricionista = ({nome, especializacao, sobre, telefone, email, CRNnutri}) => {

    return (
        <>
            <div className="container">
                <div className="img-nutricionista">
                    <img src="https://drive.google.com/file/d/1apVnuLQbX7SS1GQgGSr17ZKmVxxV-M76/view?usp=sharing" alt="" />
                </div>
                <div className="infos-nutricionista">
                    <h2>{nome}</h2>
                    <h4>{especializacao}</h4>
                    <h3>Sobre</h3>
                    <p>{sobre}</p>
                    <h3>Contato</h3>
                    <p>Telefone: {telefone}</p>
                    <p>Email: {email}</p>
                    <p>CRN: {CRNnutri}</p>
                    <button>Consulte-se</button>
                </div>
            </div>
            <img className="forma-fundo" src="../assets/images/rectangle 49.png" alt="" />
        </>
    );

}

export default PerfilNutricionista