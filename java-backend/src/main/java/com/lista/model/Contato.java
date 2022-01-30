package com.lista.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contatos")
public class Contato {

	private Long id;
	private String nome;
	private String telefone;
	private String link;
	private String image;
	private String image_alt;

	public Contato() {

	}

	public Contato(String nome, String telefone, String link, String image, String image_alt) {
		super();
		this.nome = nome;
		this.telefone = telefone;
		this.link = link;
		this.image = image;
		this.image_alt = image_alt;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getImage_alt() {
		return image_alt;
	}

	public void setImage_alt(String image_alt) {
		this.image_alt = image_alt;
	}
	
}
