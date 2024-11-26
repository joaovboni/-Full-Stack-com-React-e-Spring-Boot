package com.example.apiRestFul.service;

import com.example.apiRestFul.model.Pedido;
import com.example.apiRestFul.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {
    @Autowired
    private PedidoRepository pedidoRepository;

    public Pedido salvar(Pedido pedido) {
        if (pedido.getIdCliente() == null || pedido.getIdsProdutos().isEmpty()) {
            throw new IllegalArgumentException("Pedido deve ter cliente e produtos válidos");
        }
        return pedidoRepository.save(pedido);
    }

    public List<Pedido> listarTodos() {
        return pedidoRepository.findAll();
    }

    public Pedido buscarPorId(Long id) {
        return pedidoRepository.findById(id).orElse(null);
    }

    public List<Pedido> buscarPorIdCliente(Long idCliente) {
        return pedidoRepository.findByIdCliente(idCliente);
    }
}
