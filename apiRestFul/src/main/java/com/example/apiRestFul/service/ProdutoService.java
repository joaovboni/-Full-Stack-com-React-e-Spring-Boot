package com.example.apiRestFul.service;

import com.example.apiRestFul.model.Produto;
import com.example.apiRestFul.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository produtoRepository;

    public Produto salvar(Produto produto) {
        if (produto.getNome().isEmpty()) throw new IllegalArgumentException("Nome não pode ser vazio");
        if (produto.getPreco() < 0) throw new IllegalArgumentException("Preço não pode ser negativo");
        return produtoRepository.save(produto);
    }

    public List<Produto> listarTodos() {
        return produtoRepository.findAll();
    }

    public Produto buscarPorId(Long id) {
        return produtoRepository.findById(id).orElse(null);
    }

    public List<Produto> buscarPorNome(String nome) {
        return produtoRepository.findByNome(nome);
    }
}
