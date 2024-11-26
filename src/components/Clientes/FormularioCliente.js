import React, { useState } from "react";
import api from "../../services/api";

function FormularioCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");

  const salvarCliente = () => {
    if (!nome || !email || !contato) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    api.post("/clientes", { nome, email, contato })
      .then(() => {
        alert("Cliente cadastrado com sucesso!");
        setNome("");
        setEmail("");
        setContato("");
      })
      .catch((error) => console.error("Erro ao salvar cliente:", error));
  };

  return (
    <div>
      <h1>Cadastrar Cliente</h1>
      <form>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contato"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
        />
        <button type="button" onClick={salvarCliente}>
          Salvar
        </button>
      </form>
    </div>
  );
}

export default FormularioCliente;
