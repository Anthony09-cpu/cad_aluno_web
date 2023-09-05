package br.com.cadaluno.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.cadaluno.modelo.AlunoModelo;

public interface AlunoDAO extends CrudRepository<AlunoModelo, Integer>{
    
}
