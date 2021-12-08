package com.garreto.client_app.client;

import com.garreto.client_app.client.models.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> findClients() {
        return clientRepository.findAll();
    }

    public Client searchClientById(final Integer id) throws NotFoundException {
        return clientRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public Client saveClient(final Client client) {
        return clientRepository.save(client);
    }

    public void deleteClientById(final Integer id) {
        clientRepository.deleteById(id);
    }
}
