package com.garreto.client_app.client;

import com.garreto.client_app.client.models.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public ResponseEntity<List<Client>> findClients() {
        return ResponseEntity.ok(clientService.findClients());
    }

    @GetMapping(path = "/{clientId}")
    public ResponseEntity<Client> searchClientById(@PathVariable final Integer clientId) {
        try {
            return ResponseEntity.ok(clientService.searchClientById(clientId));
        } catch (NotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Client> saveClient(@RequestBody final Client client) {
        return ResponseEntity.status(CREATED).body(clientService.saveClient(client));
    }

    @PutMapping
    public ResponseEntity<Client> updateClient(@RequestBody final Client client) {
        return ResponseEntity.status(OK).body(clientService.saveClient(client));
    }

    @DeleteMapping(path = "/{clientId}")
    public ResponseEntity<?> deleteClientById(@PathVariable final Integer clientId) {
        clientService.deleteClientById(clientId);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
