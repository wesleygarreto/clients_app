import axios from 'axios';

const CLIENT_API_BASE_URL = "http://localhost:8080/api/v1/clients";

class ClientService {

    getClients() {
        return axios.get(CLIENT_API_BASE_URL);
    }

    createClient(client) {
        return axios.post(CLIENT_API_BASE_URL, client);
    }

    getClientById(clientId) {
        return axios.get(CLIENT_API_BASE_URL + '/' + clientId);
    }

    updateClient(client, clientId) {
        client.id = clientId
        return axios.put(CLIENT_API_BASE_URL + '/', client);
    }

    deleteClient(clientId) {
        return axios.delete(CLIENT_API_BASE_URL + '/' + clientId);
    }
}

export default new ClientService()