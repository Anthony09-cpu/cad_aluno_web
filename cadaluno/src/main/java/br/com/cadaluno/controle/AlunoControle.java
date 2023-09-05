package br.com.cadaluno.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.cadaluno.dao.AlunoDAO;
import br.com.cadaluno.modelo.AlunoModelo;

@RestController
@CrossOrigin("*")

public class AlunoControle {

    @Autowired
    AlunoDAO alunoDAO;

    @GetMapping
    public Iterable<AlunoModelo> listar(){
        return alunoDAO.findAll();
    }

    @PostMapping
    public ResponseEntity<AlunoModelo> cadastrar(@RequestBody AlunoModelo alunoModelo){
        return new ResponseEntity<AlunoModelo>(alunoDAO.save(alunoModelo),HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<AlunoModelo> alterar(@RequestBody AlunoModelo alunoModelo){
        return new ResponseEntity<AlunoModelo>(alunoDAO.save(alunoModelo),HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Integer id){
        alunoDAO.deleteById(id);
    }
}
