import React, { Component } from 'react'
import ClientService from '../clients/ClientService'

class ListClientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clients: []
        }
        this.addClient = this.addClient.bind(this);
        this.editClient = this.editClient.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
    }

    componentDidMount() {
        ClientService.getClients().then((res) => {
            this.setState({ clients: res.data });
        });
    }

    addClient() {
        console.log(this.props.history)
        this.props.history.push('/add-client/_add');
    }

    editClient(id) {
        this.props.history.push(`/add-client/${id}`);
    }

    deleteClient(id) {
        ClientService.deleteClient(id).then(res => {
            this.setState({ clients: this.state.clients.filter(client => client.id !== id) });
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Clientes</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addClient}> Adicionar Cliente</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Nome</th>
                                <th> CPF</th>
                                <th> Email</th>
                                <th> Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clients.map(
                                    client =>
                                        <tr key={client.id}>
                                            <td> {client.name} </td>
                                            <td> {client.document}</td>
                                            <td> {client.emails[0]}</td>
                                            <td>
                                                <button onClick={() => this.editClient(client.id)} className="btn btn-info">Atualizar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteClient(client.id)} className="btn btn-danger">Apagar </button>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-info">Visualizar </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListClientComponent