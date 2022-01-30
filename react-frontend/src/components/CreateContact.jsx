import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'


export default class CreateContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Nome: '',
            Telefone: '',
            Link: '',
            LinkAlt: ''
        }

        navigate = useNavigate();


        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
        this.changeLinkHandler = this.changeLinkHandler.bind(this);
        this.changeLinkAltHandler = this.changeLinkAltHandler.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.Cancel = this.Cancel.bind(this);
    }


    changeNomeHandler= (event) => {
        this.setState({Nome: event.target.value});
    }

    changeTelefoneHandler= (event) => {
        this.setState({Telefone: event.target.value});
    }
    
    changeLinkHandler= (event) => {
        this.setState({Link: event.target.value});
    }
    
    changeLinkAltHandler= (event) => {
        this.setState({LinkAlt: event.target.value});
    }

    saveContact= () => {
       navigate("/");
    }

    Cancel= () => {
       navigate("/");
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className='card-body'>
                            <div className='form-group'>
                                <text className='text'>Nome</text>
                                <input type="text" className="form-control" placeholder="Jose" onChange={this.changeNomeHandler} />
                            </div>
                            <div className='form-group'>
                                <text className='text'>Telefone</text>
                                <input type="text" className="form-control" placeholder="(00)99999-9999" onChange={this.changeTelefoneHandler} />
                            </div>
                            <div className='form-group'>
                                <text className='text'>Link image</text>
                                <input type="text" className="form-control" placeholder="http://example.com/imagem.png" onChange={this.changeLinkHandler} />
                            </div>
                            <div className='form-group'>
                                <text className='text'>Link imagem celular</text>
                                <input type="text" className="form-control" placeholder="http://example.com/imagem.png" onChange={this.changeLinkAltHandler}/>
                            </div>
                            <button className='btn' onClick={this.Cancel}>Cancelar</button>
                            <button className='btn-success' onClick={this.saveContact}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
