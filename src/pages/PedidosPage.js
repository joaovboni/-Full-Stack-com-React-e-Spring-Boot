import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, List, ListItem, ListItemText, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import './PedidosPage.css';

function PedidosPage() {
  const [pedidos, setPedidos] = useState([]);
  const [clienteId, setClienteId] = useState("");
  const [produtoId, setProdutoId] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/pedidos")
      .then(response => setPedidos(response.data))
      .catch(error => console.error("Erro ao carregar pedidos", error));

    axios.get("http://localhost:8080/clientes/listar")
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao carregar clientes", error));

    axios.get("http://localhost:8080/produtos/listar")
      .then(response => setProdutos(response.data))
      .catch(error => console.error("Erro ao carregar produtos", error));
  }, []);

  const handleSubmit = () => {
    if (clienteId && produtoId && quantidade) {
      axios.post("http://localhost:8080/pedidos", { clienteId, produtoId, quantidade })
        .then(response => {
          setPedidos([...pedidos, response.data]);
          setClienteId("");
          setProdutoId("");
          setQuantidade("");
        })
        .catch(error => console.error("Erro ao adicionar pedido", error));
    } else {
      alert("Todos os campos são obrigatórios");
    }
  };

  return (
    <div className="pedidos-container">
      <h2>Pedidos</h2>

      <div className="pedidos-top-section">
        <div className="pedidos-form-container">
          <div className="pedidos-form">
            <h3>Adicionar Pedido</h3>

            <FormControl fullWidth>
              <InputLabel>Cliente</InputLabel>
              <Select
                value={clienteId}
                onChange={(e) => setClienteId(e.target.value)}
                label="Cliente"
              >
                {clientes.map(cliente => (
                  <MenuItem key={cliente.id} value={cliente.id}>{cliente.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth style={{ marginTop: "10px" }}>
              <InputLabel>Produto</InputLabel>
              <Select
                value={produtoId}
                onChange={(e) => setProdutoId(e.target.value)}
                label="Produto"
              >
                {produtos.map(produto => (
                  <MenuItem key={produto.id} value={produto.id}>{produto.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Quantidade"
              variant="outlined"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              fullWidth
              style={{ marginTop: "10px" }}
            />

            <Button onClick={handleSubmit} variant="contained" color="primary" style={{ marginTop: "10px" }}>
              Adicionar
            </Button>
          </div>
        </div>

        <div className="pedidos-image-container">
          <img src="https://idec.org.br/sites/default/files/dicasedireitos/compra_de_produto_0.jpg" alt="Pedidos" />
        </div>
      </div>

      <List className="pedidos-list">
        {pedidos.map(pedido => (
          <ListItem key={pedido.id} className="pedidos-list-item">
            <ListItemText
              primary={`Cliente: ${pedido.cliente.nome}`}
              secondary={`Produto: ${pedido.produto.nome}, Quantidade: ${pedido.quantidade}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default PedidosPage;
