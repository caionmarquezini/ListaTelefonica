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
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            Main.api = `http://localhost:8080/api/v1`;
        } else {
            Main.api = `http://` + process.env.REACT_APP_API_BASE_URL + `:8080/api/v1`;
        }

        axios.get(Main.api)
            .then(res => { const contatos = res.data; this.setState({ contatos }); })
    }


    procurar() {
        this.nome = this.inputRef.current.value;
        if (this.nome != "") {
            axios.get(Main.api + `/find/` + this.nome)
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
            <body className='d-flex flex-column min-vh-100'>
                <div>
                    <nav className="navbar navbar-light bg-light justify-content-between">
                        <a className="navbar-brand">Lista Telefônica</a>
                        <div className="form-inline">
                            <input className="form-control mr-sm-2" placeholder="Nome" ref={this.inputRef} onKeyDown={this._handleKeyDown} />
                            <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.procurar}>Procurar</button>
                        </div>
                    </nav>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Telefone</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contatos.map((contato, index) => (<>
                                <tr>
                                    {contato.link ? window.innerWidth > 420 ? <td colspan="2"><a href={contato.link}><img src={contato.image} /></a></td> : <td colspan="2"><a href={contato.link}><img src={contato.image_alt} /></a></td> : <td>{contato.nome}</td>}
                                    {!contato.link ? <td><a href={"tel://" + contato.telefone}>{contato.telefone}</a></td> : ''}
                                </tr>
                            </>))}
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </body>
        )
    }
}