package com.lista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.lista.model.Contato;
import com.lista.repository.ContatoRepository;

@SpringBootApplication
public class ListaTelefonicaApplication{

	@Autowired
	ContatoRepository contatoRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(ListaTelefonicaApplication.class, args);
	}

/*	@Override
	public void run(String... args) throws Exception {
	
		contatoRepository.save(new Contato("caio marquezini", "ariranha", "rua 10 de abril", "sp", "15960-000", "17996819031", "caionmarqz@gmail.com"));
		contatoRepository.save(new Contato("brew lima", "santa adelia", "rua das brisas", "sp", "15000-000", "17992475391", "brews@gmail.com"));
		contatoRepository.save(new Contato("fulano", "são paulo", "rua das orquideas", "sp", "13100-000", "11992415532", "foulano@hotmail.com"));
	
	}
*/

}
