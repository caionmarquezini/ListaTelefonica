package com.lista.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lista.model.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long>{
	
	@Query(value = "SELECT a FROM Contato a WHERE LOWER(a.nome) LIKE %:nome%", nativeQuery = false)
	List<Contato> findByNome(String nome);
	
	
}
