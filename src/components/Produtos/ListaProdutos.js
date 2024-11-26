import React, { useState, useEffect } from "react";
import api from "../../services/api";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    api.get("/produtos")
      .then((response) => setProdutos(response.data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  const buscarProdutos = () => {
    api.get(`/produtos/buscar?nome=${busca}`)
      .then((response) => setProdutos(response.data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <input
        type="text"
        placeholder="Buscar produto pelo nome"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button onClick={buscarProdutos}>Buscar</button>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            Produto #{produto.id} - Nome: {produto.nome} - Preço: R${produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProdutos;
