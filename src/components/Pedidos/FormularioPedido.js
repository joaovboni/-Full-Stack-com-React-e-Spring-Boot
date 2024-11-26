import React, { useState, useEffect } from "react";
import api from "../../services/api";

function FormularioPedido() {
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [idCliente, setIdCliente] = useState("");
  const [idsProdutos, setIdsProdutos] = useState([]);

  useEffect(() => {
    api.get("/clientes/listar").then((response) => setClientes(response.data));
    api.get("/produtos").then((response) => setProdutos(response.data));
  }, []);

  const adicionarPedido = () => {
    if (!idCliente || idsProdutos.length === 0) {
      alert("Selecione um cliente e pelo menos um produto.");
      return;
    }

    api.post("/pedidos", { idCliente, idsProdutos })
      .then(() => {
        alert("Pedido cadastrado com sucesso!");
        setIdCliente("");
        setIdsProdutos([]);
      })
      .catch((error) => console.error("Erro ao cadastrar pedido:", error));
  };

  const toggleProduto = (idProduto) => {
    setIdsProdutos((prev) =>
      prev.includes(idProduto)
        ? prev.filter((id) => id !== idProduto)
        : [...prev, idProduto]
    );
  };

  return (
    <div>
      <h2>Cadastrar Pedido</h2>
      <select value={idCliente} onChange={(e) => setIdCliente(e.target.value)}>
        <option value="">Selecione um Cliente</option>
        {clientes.map((cliente) => (
          <option key={cliente.id} value={cliente.id}>
            {cliente.nome}
          </option>
        ))}
      </select>

      <h3>Produtos</h3>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <input
            type="checkbox"
            value={produto.id}
            checked={idsProdutos.includes(produto.id)}
            onChange={() => toggleProduto(produto.id)}
          />
          {produto.nome} - R${produto.preco.toFixed(2)}
        </div>
      ))}

      <button onClick={adicionarPedido}>Adicionar Pedido</button>
    </div>
  );
}

export default FormularioPedido;
