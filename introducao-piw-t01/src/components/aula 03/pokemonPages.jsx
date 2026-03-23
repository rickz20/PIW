import { useState } from "react";

const PokemonPages = () => {


    const [pokemonId, setPokemonId] = useState(700)

    const voltandoPokemon = () => {

        if (pokemonId -1 > 0) {
            setPokemonId(pokemonId -1)
        }
    }

    const adiatandoPokemon = () => {
        setPokemonId(pokemonId +1)

    }

  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pokemon Pages
          </a>
        </div>
      </nav>
      <main style={{ paddingTop: 50 }}>
        <div className="card" style={{ width: "18rem", paddingTop: "20px" }}>
          <img
            style={{ width: "200px" }}
            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + pokemonId + ".svg"}
            className="card-img-top"
            alt="Pokemon"
          />
          <div className="card-body">
            <h5 className="card-title">Nome do Pokemon</h5>
            <p className="card-text" style={{ textAlign: "justify" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              aperiam, quaerat natus fugit atque, ullam nisi, quae est similique
              doloremque ipsa voluptatum distinctio quibusdam. Tempora ex rem
              error dolor cupiditate?
            </p>
          </div>
          <div>
            <button className="btn btn-primary" onClick={voltandoPokemon}>Diminuir</button>
            <button className="btn btn-primary" onClick={adiatandoPokemon}>Acrescentar</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default PokemonPages;