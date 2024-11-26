import api from "./api";


export const listarPedidos = async () => {
  try {
    const response = await api.get("/pedidos");
    return response.data;
  } catch (error) {
    console.error("Erro ao listar pedidos:", error);
    throw error;
  }
};

export const buscarPedidosPorIdCliente = async (idCliente) => {
  try {
    const response = await api.get(`/pedidos/buscar?idCliente=${idCliente}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pedidos por cliente:", error);
    throw error;
  }
};

export const criarPedido = async (pedido) => {
  try {
    const response = await api.post("/pedidos", pedido);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    throw error;
  }
};
