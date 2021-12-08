import React, { Component } from 'react'
import ClientService from '../clients/ClientService';

class CreateClientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            document: '',
            emails: [],
            address: {
                zipCode: '',
                street: '',
                district: '',
                city: '',
                state: '',
                complement: '',
            },
            phones: [{
                type: '',
                number: null
            }]
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDocumentHandler = this.changeDocumentHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);

        this.saveOrUpdateClient = this.saveOrUpdateClient.bind(this);
    }

    componentDidMount() {

        if (this.state.id === '_add') {
            return
        } else {
            ClientService.getClientById(this.state.id).then((res) => {
                let client = res.data;
                console.log(client)
                this.setState({
                    name: client.name,
                    document: client.document,
                    emails: client.emails,
                    address: client.address,
                    phones: client.phones
                });
            });
        }
    }
    saveOrUpdateClient = (e) => {
        e.preventDefault();
        let client = {
            name: this.state.name,
            document: this.state.document,
            emails: this.state.emails,
            address: this.state.address,
            phones: this.state.phones
        };

        console.log('client => ' + JSON.stringify(client));

        if (this.state.id === '_add') {
            ClientService.createClient(client).then(res => {
                this.props.history.push('/clients');
            });
        } else {
            ClientService.updateClient(client, this.state.id).then(res => {
                this.props.history.push('/clients');
            });
        }
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeDocumentHandler = (event) => {
        this.setState({ document: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emails: event.target.value });
    }

    changeAddressHandler = (event) => {
        let newAddress = {
            ...this.state.address,
            [event.target.name]: event.target.value
        }

        this.setState({ address: newAddress });
        console.log(this.state.address)
    }

    changePhoneHandler = (event) => {
        let newPhones = {
            ...this.state.phones,
            [event.target.name]: event.target.value
        }

        this.setState({ phones: newPhones });
        console.log(this.state.phones)
    }

    cancel() {
        this.props.history.push('/clients');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Adicionar Cliente</h3>
        } else {
            return <h3 className="text-center">Atualizar Cliente</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Nome: </label>
                                        <input placeholder="Nome" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> CPF: </label>
                                        <input placeholder="CPF" name="document" className="form-control"
                                            value={this.state.document} onChange={this.changeDocumentHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email" name="emails" className="form-control"
                                            value={this.state.emails} onChange={this.changeEmailHandler} />
                                    </div>
                                    <label> Address: </label>
                                    <div className="container">

                                        <div className="form-group">
                                            <label> CEP: </label>
                                            <input placeholder="CEP" name="zipCode" className="form-control"
                                                value={this.state.address.zipCode} onChange={this.changeAddressHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Logradouro: </label>
                                            <input placeholder="Logradouro" name="street" className="form-control"
                                                value={this.state.address.street} onChange={this.changeAddressHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Bairro: </label>
                                            <input placeholder="Bairro" name="district" className="form-control"
                                                value={this.state.address.district} onChange={this.changeAddressHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Cidade: </label>
                                            <input placeholder="Cidade" name="city" className="form-control"
                                                value={this.state.address.city} onChange={this.changeAddressHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Estado: </label>
                                            <input placeholder="Estado" name="state" className="form-control"
                                                value={this.state.address.state} onChange={this.changeAddressHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Complemento: </label>
                                            <input placeholder="Complemento" name="complement" className="form-control"
                                                value={this.state.address.complement} onChange={this.changeAddressHandler} />
                                        </div>
                                    </div>

                                    <label> Telefones: </label>
                                    <div className="container">
                                        <label> Tipo: </label>
                                        <div className="form-group">
                                            <select placeholder="Tipo" name="type" className="form-control"
                                                value={this.state.phones[0].type} onChange={this.changePhoneHandler} >
                                                <option value="">Selecione</option>
                                                <option value="CELL_PHONE">CELULAR</option>
                                                <option value="COMMERCIAL">COMERCIAL</option>
                                                <option value="RESIDENTIAL">RESIDENCIAL</option>
                                            </select>
                                        </div>
                                        <label> Número: </label>
                                        <div className="form-group">
                                            <input placeholder="Número" name="number" className="form-control"
                                                value={this.state.phones[0].number} onChange={this.changePhoneHandler} />
                                        </div>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateClient}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateClientComponent