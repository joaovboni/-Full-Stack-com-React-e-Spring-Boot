package com.example.apiRestFul.controller;

import com.example.apiRestFul.model.Pedido;
import com.example.apiRestFul.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {
    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    public Pedido salvar(@RequestBody Pedido pedido) {
        return pedidoService.salvar(pedido);
    }

    @GetMapping
    public List<Pedido> listarTodos() {
        return pedidoService.listarTodos();
    }

    @GetMapping("/{id}")
    public Pedido buscarPorId(@PathVariable Long id) {
        return pedidoService.buscarPorId(id);
    }

    @GetMapping("/buscar")
    public List<Pedido> buscarPorIdCliente(@RequestParam Long idCliente) {
        return pedidoService.buscarPorIdCliente(idCliente);
    }
}