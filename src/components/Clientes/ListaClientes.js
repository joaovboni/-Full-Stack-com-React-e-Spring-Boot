import React, { useState, useEffect } from "react";
import api from "../../services/api";

function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    api.get("/clientes/listar")
      .then((response) => setClientes(response.data))
      .catch((error) => console.error("Erro ao buscar clientes:", error));
  }, []);

  const buscarClientes = () => {
    api.get(`/clientes/buscar?nome=${busca}`)
      .then((response) => setClientes(response.data))
      .catch((error) => console.error("Erro ao buscar clientes:", error));
  };

  return (
    <div>
      <h1>Clientes</h1>
      <input
        type="text"
        placeholder="Buscar cliente"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button onClick={buscarClientes}>Buscar</button>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.email} - {cliente.contato}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaClientes;
