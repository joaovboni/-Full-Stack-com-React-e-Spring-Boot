import api from "./api";


export const listarProdutos = async () => {
  try {
    const response = await api.get("/produtos");
    return response.data;
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
    throw error;
  }
};

export const buscarProdutoPorNome = async (nome) => {
  try {
    const response = await api.get(`/produtos/buscar?nome=${nome}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produto por nome:", error);
    throw error;
  }
};

export const criarProduto = async (produto) => {
  try {
    const response = await api.post("/produtos", produto);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    throw error;
  }
};
