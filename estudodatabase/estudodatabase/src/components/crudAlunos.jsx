import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import db from "../firebase/firebase";
import "./crudAlunos.css";

const INITIAL_FORM = { nome: "", ira: "", imagem: "" };

export default function AlunosManager() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createForm, setCreateForm] = useState(INITIAL_FORM);
  const [editForm, setEditForm] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const [createErrors, setCreateErrors] = useState({});
  const [editErrors, setEditErrors] = useState({});
  const [toast, setToast] = useState(null);

  // ─── Buscar Alunos ───────────────────────────────────────────────────────────
  const fetchAlunos = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "alunos"));
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setAlunos(data);
    } catch (err) {
      console.error("Erro ao buscar alunos:", err);
      showToast("error", "Erro ao carregar alunos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  // ─── Toast ───────────────────────────────────────────────────────────────────
  const showToast = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 3500);
  };

  // ─── Validação ───────────────────────────────────────────────────────────────
  const validate = (form) => {
    const errors = {};
    if (!form.nome.trim()) errors.nome = "Nome é obrigatório.";
    if (form.ira === "" || isNaN(form.ira))
      errors.ira = "IRA deve ser um número válido.";
    else if (Number(form.ira) < 0 || Number(form.ira) > 10)
      errors.ira = "IRA deve estar entre 0 e 10.";
    if (!form.imagem.trim()) errors.imagem = "URL da imagem é obrigatória.";
    return errors;
  };

  // ─── Criar Aluno ─────────────────────────────────────────────────────────────
  const handleCreate = async () => {
    const errors = validate(createForm);
    if (Object.keys(errors).length > 0) {
      setCreateErrors(errors);
      return;
    }
    try {
      await addDoc(collection(db, "alunos"), {
        nome: createForm.nome.trim(),
        Ira: parseFloat(createForm.ira),
        Imagem: createForm.imagem.trim(),
      });
      setCreateForm(INITIAL_FORM);
      setCreateErrors({});
      showToast("success", "Aluno cadastrado com sucesso!");
      fetchAlunos();
    } catch (err) {
      console.error("Erro ao criar aluno:", err);
      showToast("error", "Erro ao cadastrar aluno.");
    }
  };

  // ─── Iniciar Edição ──────────────────────────────────────────────────────────
  const handleEditStart = (aluno) => {
    setEditForm({
      id: aluno.id,
      nome: aluno.nome ?? "",
      ira: String(aluno.Ira ?? ""),
      imagem: aluno.imagem ?? "",
    });
    setEditErrors({});
    // Scroll suave até o formulário de edição
    setTimeout(() => {
      document
        .getElementById("edit-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  // ─── Validar e Abrir Confirmação de Edição ───────────────────────────────────
  const handleEditSubmit = () => {
    const errors = validate(editForm);
    if (Object.keys(errors).length > 0) {
      setEditErrors(errors);
      return;
    }
    setConfirmEdit(true);
  };

  // ─── Confirmar Edição ─────────────────────────────────────────────────────────
  const handleEditConfirm = async () => {
    try {
      await updateDoc(doc(db, "alunos", editForm.id), {
        nome: editForm.nome.trim(),
        Ira: parseFloat(editForm.ira),
        Imagem: editForm.imagem.trim(),
      });
      setEditForm(null);
      setConfirmEdit(false);
      setEditErrors({});
      showToast("success", "Aluno atualizado com sucesso!");
      fetchAlunos();
    } catch (err) {
      console.error("Erro ao atualizar aluno:", err);
      showToast("error", "Erro ao atualizar aluno.");
    }
  };

  // ─── Confirmar Deleção ────────────────────────────────────────────────────────
  const handleDeleteConfirm = async () => {
    try {
      await deleteDoc(doc(db, "alunos", confirmDelete));
      setConfirmDelete(null);
      // Se estava editando o aluno deletado, cancela edição
      if (editForm?.id === confirmDelete) setEditForm(null);
      showToast("success", "Aluno removido com sucesso!");
      fetchAlunos();
    } catch (err) {
      console.error("Erro ao deletar aluno:", err);
      showToast("error", "Erro ao remover aluno.");
    }
  };

  // ─── Helpers ──────────────────────────────────────────────────────────────────
  const iraColor = (value) => {
    const n = Number(value);
    if (n >= 8) return "ira-badge--high";
    if (n >= 6) return "ira-badge--mid";
    return "ira-badge--low";
  };

  // ─── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="app">
      {/* ── Toast ── */}
      {toast && (
        <div className={`toast toast--${toast.type}`} key={toast.text}>
          <span className="toast-icon">{toast.type === "success" ? "✓" : "✕"}</span>
          {toast.text}
        </div>
      )}

      {/* ── Header ── */}
      <header className="app-header">
        <div className="header-content">
          <div className="header-icon">🎓</div>
          <div>
            <h1>Gestão de Alunos</h1>
            <p>Sistema de Gerenciamento Acadêmico</p>
          </div>
        </div>
        <div className="header-stat">
          <strong>{alunos.length}</strong>
          <span>alunos</span>
        </div>
      </header>

      <main className="app-content">
        {/* ════ FORMULÁRIO DE CADASTRO ════ */}
        <section className="panel create-panel">
          <div className="panel-header">
            <span className="panel-dot panel-dot--blue" />
            <h2>Cadastrar Novo Aluno</h2>
          </div>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="c-nome">Nome do Aluno</label>
              <input
                id="c-nome"
                type="text"
                placeholder="Ex: João da Silva"
                value={createForm.nome}
                onChange={(e) =>
                  setCreateForm({ ...createForm, nome: e.target.value })
                }
                className={createErrors.nome ? "input-error" : ""}
              />
              {createErrors.nome && (
                <span className="error-msg">{createErrors.nome}</span>
              )}
            </div>

            <div className="field">
              <label htmlFor="c-ira">IRA (0 – 10)</label>
              <input
                id="c-ira"
                type="number"
                step="0.01"
                min="0"
                max="10"
                placeholder="Ex: 8.75"
                value={createForm.ira}
                onChange={(e) =>
                  setCreateForm({ ...createForm, ira: e.target.value })
                }
                className={createErrors.ira ? "input-error" : ""}
              />
              {createErrors.ira && (
                <span className="error-msg">{createErrors.ira}</span>
              )}
            </div>

            <div className="field field--full">
              <label htmlFor="c-img">URL da Foto</label>
              <input
                id="c-img"
                type="url"
                placeholder="https://exemplo.com/foto.jpg"
                value={createForm.imagem}
                onChange={(e) =>
                  setCreateForm({ ...createForm, imagem: e.target.value })
                }
                className={createErrors.imagem ? "input-error" : ""}
              />
              {createErrors.imagem && (
                <span className="error-msg">{createErrors.imagem}</span>
              )}
            </div>
          </div>

          <div className="form-footer">
            <button className="btn btn--primary" onClick={handleCreate}>
              <span>+</span> Cadastrar Aluno
            </button>
            <button
              className="btn btn--ghost"
              onClick={() => {
                setCreateForm(INITIAL_FORM);
                setCreateErrors({});
              }}
            >
              Limpar
            </button>
          </div>
        </section>

        {/* ════ FORMULÁRIO DE EDIÇÃO ════ */}
        {editForm && (
          <section className="panel edit-panel" id="edit-section">
            <div className="panel-header">
              <span className="panel-dot panel-dot--amber" />
              <h2>Editando Aluno</h2>
              <button
                className="close-btn"
                onClick={() => {
                  setEditForm(null);
                  setEditErrors({});
                }}
                title="Cancelar edição"
              >
                ✕
              </button>
            </div>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="e-nome">Nome do Aluno</label>
                <input
                  id="e-nome"
                  type="text"
                  value={editForm.nome}
                  onChange={(e) =>
                    setEditForm({ ...editForm, nome: e.target.value })
                  }
                  className={editErrors.nome ? "input-error" : ""}
                />
                {editErrors.nome && (
                  <span className="error-msg">{editErrors.nome}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="e-ira">IRA (0 – 10)</label>
                <input
                  id="e-ira"
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={editForm.ira}
                  onChange={(e) =>
                    setEditForm({ ...editForm, ira: e.target.value })
                  }
                  className={editErrors.ira ? "input-error" : ""}
                />
                {editErrors.ira && (
                  <span className="error-msg">{editErrors.ira}</span>
                )}
              </div>

              <div className="field field--full">
                <label htmlFor="e-img">URL da Foto</label>
                <input
                  id="e-img"
                  type="url"
                  value={editForm.imagem}
                  onChange={(e) =>
                    setEditForm({ ...editForm, imagem: e.target.value })
                  }
                  className={editErrors.imagem ? "input-error" : ""}
                />
                {editErrors.imagem && (
                  <span className="error-msg">{editErrors.imagem}</span>
                )}
              </div>
            </div>

            <div className="form-footer">
              <button className="btn btn--amber" onClick={handleEditSubmit}>
                💾 Salvar Alterações
              </button>
              <button
                className="btn btn--ghost"
                onClick={() => {
                  setEditForm(null);
                  setEditErrors({});
                }}
              >
                Cancelar
              </button>
            </div>
          </section>
        )}

        {/* ════ LISTA DE ALUNOS ════ */}
        <section className="panel list-panel">
          <div className="panel-header">
            <span className="panel-dot panel-dot--green" />
            <h2>
              Alunos Cadastrados
              <span className="count-badge">{alunos.length}</span>
            </h2>
          </div>

          {loading ? (
            <div className="state-display">
              <div className="spinner" />
              <p>Carregando alunos...</p>
            </div>
          ) : alunos.length === 0 ? (
            <div className="state-display">
              <span className="state-icon">📭</span>
              <p>Nenhum aluno cadastrado ainda.</p>
            </div>
          ) : (
            <div className="cards-grid">
              {alunos.map((aluno) => (
                <div
                  key={aluno.id}
                  className={`card ${
                    editForm?.id === aluno.id ? "card--active" : ""
                  }`}
                >
                  {editForm?.id === aluno.id && (
                    <div className="card-editing-badge">Editando</div>
                  )}

                  <div className="card-img-wrap">
                    <img
                      src={aluno.Imagem}
                      alt={aluno.nome}
                      onError={(e) => {
                        e.target.src =
                          "https://ui-avatars.com/api/?name=" +
                          encodeURIComponent(aluno.nome ?? "Aluno") +
                          "&background=2D3A8C&color=fff&size=160";
                      }}
                    />
                  </div>

                  <div className="card-body">
                    <h3 title={aluno.nome}>{aluno.nome}</h3>
                    <div className={`ira-badge ${iraColor(aluno.Ira)}`}>
                      <span className="ira-label">IRA</span>
                      <strong>{Number(aluno.Ira ?? 0).toFixed(2)}</strong>
                    </div>
                  </div>

                  <div className="card-actions">
                    <button
                      className="action-btn action-btn--edit"
                      onClick={() => handleEditStart(aluno)}
                    >
                      ✏️ Editar
                    </button>
                    <button
                      className="action-btn action-btn--delete"
                      onClick={() => setConfirmDelete(aluno.id)}
                    >
                      🗑️ Deletar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* ════ MODAL — CONFIRMAR DELEÇÃO ════ */}
      {confirmDelete && (
        <div
          className="overlay"
          onClick={(e) =>
            e.target === e.currentTarget && setConfirmDelete(null)
          }
        >
          <div className="modal">
            <div className="modal-icon modal-icon--danger">🗑️</div>
            <h3>Tem certeza que deseja deletar?</h3>
            <p>
              Essa ação é permanente e não pode ser desfeita. O aluno será
              removido completamente do sistema.
            </p>
            <div className="modal-actions">
              <button
                className="btn btn--danger"
                onClick={handleDeleteConfirm}
              >
                Sim, deletar
              </button>
              <button
                className="btn btn--ghost"
                onClick={() => setConfirmDelete(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ════ MODAL — CONFIRMAR EDIÇÃO ════ */}
      {confirmEdit && (
        <div
          className="overlay"
          onClick={(e) =>
            e.target === e.currentTarget && setConfirmEdit(false)
          }
        >
          <div className="modal">
            <div className="modal-icon modal-icon--amber">💾</div>
            <h3>Tem certeza que deseja alterar?</h3>
            <p>
              Os dados do aluno serão atualizados com as novas informações
              fornecidas.
            </p>
            <div className="modal-actions">
              <button
                className="btn btn--amber"
                onClick={handleEditConfirm}
              >
                Sim, alterar
              </button>
              <button
                className="btn btn--ghost"
                onClick={() => setConfirmEdit(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}