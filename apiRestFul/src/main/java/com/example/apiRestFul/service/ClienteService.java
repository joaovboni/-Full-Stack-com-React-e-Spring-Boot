package com.example.apiRestFul.service;

import com.example.apiRestFul.model.Cliente;
import com.example.apiRestFul.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente salvar(Cliente cliente) {
        if (cliente.getNome().isEmpty()) throw new IllegalArgumentException("Nome não pode ser vazio");
        return clienteRepository.save(cliente);
    }

    public List<Cliente> listarTodos() {
        return clienteRepository.findAll();
    }

    public Cliente buscarPorId(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    public List<Cliente> buscarPorNome(String nome) {
        return clienteRepository.findByNome(nome);
    }
}
