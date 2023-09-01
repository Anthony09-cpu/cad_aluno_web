package br.com.cadalunos.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.cadalunos.modelo.AlunoModelo;

public interface AlunoDAO extends CrudRepository<AlunoModelo, Integer>{
    
}
