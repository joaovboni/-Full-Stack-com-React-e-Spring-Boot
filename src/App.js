import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ClientesPage from "./pages/ClientesPage";
import ProdutosPage from "./pages/ProdutosPage";
import PedidosPage from "./pages/PedidosPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
