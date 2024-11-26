import React, { useState, useEffect } from "react";
import api from "../../services/api";

function ListaPedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    api.get("/pedidos")
      .then((response) => setPedidos(response.data))
      .catch((error) => console.error("Erro ao buscar pedidos:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Pedidos</h1>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            Pedido #{pedido.id} - Cliente ID: {pedido.idCliente} - Produtos IDs:{" "}
            {pedido.idsProdutos.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPedidos;
