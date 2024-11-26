import api from "../../services/api";

export const listarClientes = () => api.get("/clientes/listar");
export const buscarClientePorNome = (nome) => api.get(`/clientes/buscar?nome=${nome}`);
export const salvarCliente = (cliente) => api.post("/clientes", cliente);
