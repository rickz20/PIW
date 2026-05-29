import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";

function BuscarUsuarios() {
  // Estado para armazenar a lista de usuários vindos do banco
  const [usuarios, setUsuarios] = useState([]);
  // Estado para controlar o carregamento
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Função assíncrona dentro do useEffect
    async function pegarDados() {
      try {
        const querySnapshot = await getDocs(collection(db, "professores"));
        const listaUsuarios = [];
        
        querySnapshot.forEach((doc) => {
          // Salva os dados do documento junto com o ID dele
          listaUsuarios.push({ id: doc.id, ...doc.data() });
        });

        // Atualiza o estado com os usuários encontrados
        setUsuarios(listaUsuarios);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setCarregando(false);
      }
    }

    pegarDados();
  }, []); // O array vazio garante que a busca só rode uma vez ao carregar a tela

  if (carregando) {
    return <p>Carregando usuários...</p>;
  }

  return (
    <div>
      <h2>Lista de Usuários</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id} style={{ marginBottom: "20px" }}>
              <p><strong>Nome:</strong> {usuario.nome}</p>
              <p><strong>Curso:</strong> {usuario.curso}</p>
              {usuario.imagem && (
                <img src={usuario.imagem} alt={usuario.nome} width="100" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BuscarUsuarios;