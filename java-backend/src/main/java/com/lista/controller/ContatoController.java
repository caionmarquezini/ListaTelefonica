package com.lista.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lista.model.Contato;
import com.lista.repository.ContatoRepository;

@CrossOrigin
@RestController
@RequestMapping("/")
public class ContatoController {

	
@Autowired
ContatoRepository contatoRepository;
	
	
@PostMapping(value = "/api/v1", produces = "application/json", consumes = "application/json")	
public ResponseEntity<Contato> addRecord(@RequestParam Contato contato) {
	contatoRepository.save(contato);
	return new ResponseEntity<Contato>(contato, HttpStatus.OK);
}

@DeleteMapping(value = "api/v1/{id}", produces = "application/json")
public ResponseEntity<Contato> deleteRecord(@PathVariable Long id) {
	Contato tmp = contatoRepository.findById(id).get();
	contatoRepository.deleteById(id);
	return new ResponseEntity<Contato>(tmp, HttpStatus.OK);
}

@GetMapping(value = "/api/v1", produces = "application/json")
public ResponseEntity<List<Contato>> getRecords() {
	return new ResponseEntity<List<Contato>>(contatoRepository.findAll(), HttpStatus.OK);
}

@GetMapping(value = "/api/v1/find/{nome}", produces = "application/json")
public ResponseEntity<List<Contato>> searchByNameFunc(@PathVariable String nome) {
	return new ResponseEntity<List<Contato>>(contatoRepository.findByNome(nome.toLowerCase()), HttpStatus.OK);
}
	
	
	
}
