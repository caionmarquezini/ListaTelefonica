import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            contatos: []
        }

        this.livesearch = React.createRef(this);
        this.inputRef = React.createRef(this);
        this.procurar = this.procurar.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);

        
    }

    

    componentDidMount() {
        axios.get(`http://172.17.0.2:8080/api/v1`)
            .then(res => { const contatos = res.data; this.setState({ contatos }); })
    }


    procurar() {
        this.nome = this.inputRef.current.value;
        axios.get(`http://172.17.0.2:8080/api/v1/find/` + this.nome)
            .then(res => { const contatos = res.data; this.setState({ contatos }); })
    }

    _handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.procurar();
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <a className="navbar-brand">Lista Telefonica Ariranha</a>
                    <div className="form-inline">
                        <input className="form-control mr-sm-2" placeholder="Nome" ref={this.inputRef} onKeyDown={this._handleKeyDown} />
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.procurar}>Procurar</button>
                    </div>
                </nav>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Nome</td>
                            <td>Endereço</td>
                            <td>Telefone</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contatos.map((contato, index) => (<>
                            <tr>
                                <td>{contato.id}</td>
                                <td>{contato.nome}</td>
                                <td>{contato.endereco}</td>
                                <td>{contato.telefone}</td>
                                <td>{contato.email}</td>
                            </tr>
                        </>))}
                    </tbody>
                </table>
            </div>
        )
    }
}