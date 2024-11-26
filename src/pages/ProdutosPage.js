import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import './ProdutosPage.css';

function ProdutosPage() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [buscarNome, setBuscarNome] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/produtos")
      .then(response => setProdutos(response.data))
      .catch(error => console.error("Erro ao carregar produtos", error));
  }, []);

  const handleSubmit = () => {
    if (nome && descricao && preco) {
      const produto = { nome, descricao, preco: parseFloat(preco) };
      axios.post("http://localhost:8080/produtos", produto)
        .then(response => {
          setProdutos([...produtos, response.data]);
          setNome("");
          setDescricao("");
          setPreco("");
        })
        .catch(error => console.error("Erro ao adicionar produto", error));
    } else {
      alert("Todos os campos são obrigatórios");
    }
  };

  const handleBuscar = () => {
    axios.get(`http://localhost:8080/produtos/buscar?nome=${buscarNome}`)
      .then(response => setProdutos(response.data))
      .catch(error => console.error("Erro ao buscar produtos", error));
  };

  return (
    <div className="produtos-container">
      <div className="produtos-top-section">
        <TextField
          label="Buscar Nome"
          variant="outlined"
          value={buscarNome}
          onChange={(e) => setBuscarNome(e.target.value)}
          fullWidth
          className="produtos-buscar-input"
        />
        <Button
          onClick={handleBuscar}
          variant="contained"
          color="primary"
          className="produtos-buscar-btn"
        >
          Buscar
        </Button>
      </div>

      <div className="produtos-middle-section">
        <div className="produtos-image-container">
          <img
            src="https://climba.com.br/blog/wp-content/uploads/2018/12/258588-x-dicas-para-evitar-perder-tempo-com-o-cadastro-de-produtos-1024x682.jpg"
            alt="Produtos em destaque"
            className="produtos-main-image"
          />
        </div>
        <div className="produtos-form-container">
          <h3>Adicionar Produto</h3>
          <TextField
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Descrição"
            variant="outlined"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Preço"
            variant="outlined"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Adicionar
          </Button>
        </div>
      </div>

      <div className="produtos-bottom-section">
        <h3>Produtos Cadastrados</h3>
        <List>
          {produtos.map(produto => (
            <ListItem key={produto.id} className="produtos-list-item">
              <ListItemText
                primary={produto.nome}
                secondary={`Descrição: ${produto.descricao}, Preço: R$ ${produto.preco}`}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default ProdutosPage;
