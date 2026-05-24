import "../styles/navbar.css"
const NavBar = () => {
    return (
        <nav className="navbar">
            <div id="voltar">
                <img src="../assets/images/Arrow left.png" alt="iconeVoltar" />
                <p>nutricionistas</p>
            </div>
            <img src="" alt="Logo" />
            <div id="acoes">
                <div id="inicio">
                    <img src="../assets/images/Home.png" alt="iconeCasa" />
                    <p>Início</p>
                </div>
                    <div id="nutricionistas">
                        <img src="../assets/images/Users.png" alt="iconeNutricionistas" />
                        <p>nutricionistas</p>
                    </div>
                    <div id="perfil">
                        <img src="../assets/images/User.png" alt="iconeNutri" />
                        <p>Perfil</p>
                    </div>
            </div>
        </nav>
    )
}

export default NavBar