import React, { useState } from "react";
import api from "../../services/api";

function FormularioProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const adicionarProduto = () => {
    if (!nome || preco <= 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    api.post("/produtos", { nome, preco })
      .then(() => {
        alert("Produto cadastrado com sucesso!");
        setNome("");
        setPreco("");
      })
      .catch((error) => console.error("Erro ao cadastrar produto:", error));
  };

  return (
    <div>
      <h2>Cadastrar Produto</h2>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <button onClick={adicionarProduto}>Adicionar</button>
    </div>
  );
}

export default FormularioProduto;
