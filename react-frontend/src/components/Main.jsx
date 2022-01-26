import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            contatos: [],
        }

        this.livesearch = React.createRef(this);
        this.inputRef = React.createRef(this);
        this.procurar = this.procurar.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);

        var api;
    }
    

    componentDidMount() {
        Main.api = `http://`+process.env.REACT_APP_API_BASE_URL+`:8080/api/v1`;
    	console.log(process.env.REACT_APP_API_BASE_URL);
        console.log(Main.api);
        axios.get(Main.api)
        .then(res => { const contatos = res.data; this.setState({ contatos }); })
    }


    procurar() {
        this.nome = this.inputRef.current.value;
        if (this.nome != "") {
        axios.get(Main.api+`/find/` + this.nome)
            .then(res => { const contatos = res.data; this.setState({ contatos }); })
        } else {
            axios.get(Main.api)
            .then(res => { const contatos = res.data; this.setState({ contatos }); })
        }
        
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
                    <a className="navbar-brand">Phone list</a>
                    <div className="form-inline">
                        <input className="form-control mr-sm-2" placeholder="Nome" ref={this.inputRef} onKeyDown={this._handleKeyDown} />
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.procurar}>Procurar</button>
                    </div>
                </nav>
                <table className="table">
                    <thead className=".thead-dark">
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contatos.map((contato, index) => (<>
                            <tr>
                                <td>{contato.id}</td>
                                <td>{contato.nome}</td>
                                <td>{contato.telefone}</td>
                            </tr>
                        </>))}
                    </tbody>
                </table>
            </div>
        )
    }
}
