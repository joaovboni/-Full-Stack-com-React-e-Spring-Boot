import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import './ClientesPage.css';

function ClientesPage() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");
  const [buscarNome, setBuscarNome] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/clientes/listar")
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao carregar clientes", error));
  }, []);

  const handleSubmit = () => {
    if (nome && email && contato) {
      axios.post("http://localhost:8080/clientes", { nome, email, contato })
        .then(response => {
          setClientes(prevClientes => [...prevClientes, response.data]);
          setNome("");
          setEmail("");
          setContato("");
        })
        .catch(error => console.error("Erro ao adicionar cliente", error));
    } else {
      alert("Todos os campos são obrigatórios");
    }
  };

  const handleBuscar = () => {
    axios.get(`http://localhost:8080/clientes/buscar?nome=${buscarNome}`)
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao buscar clientes", error));
  };

  return (
    <div className="clientes-container">
      <div className="clientes-top-section">
        <TextField
          label="Buscar Nome"
          variant="outlined"
          value={buscarNome}
          onChange={(e) => setBuscarNome(e.target.value)}
          fullWidth
          InputProps={{
            style: { color: "#000" },
          }}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
        />
        <Button onClick={handleBuscar} variant="contained" className="clientes-buscar-btn">
          Buscar
        </Button>
      </div>

      <div className="clientes-middle-section">
        <div className="clientes-image-container">
          <img
            src="https://img.freepik.com/fotos-gratis/colegas-sorridentes-discutindo-no-trabalho_23-2149411517.jpg?semt=ais_hybrid"
            alt="Ilustração de colegas"
            className="clientes-client-image"
          />
        </div>
        <div className="clientes-form-container">
          <h3>Cadastrar Cliente</h3>
          <TextField
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Contato"
            variant="outlined"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Adicionar
          </Button>
        </div>
      </div>

      <div className="clientes-bottom-section">
        <h3>Clientes Cadastrados</h3>
        <List>
          {clientes.map((cliente) => (
            <ListItem key={cliente.id} className="clientes-list-item">
              <ListItemText
                primary={cliente.nome}
                secondary={`Email: ${cliente.email}, Contato: ${cliente.contato}`}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default ClientesPage;
