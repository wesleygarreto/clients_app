package com.garreto.client_app.client.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Client implements Serializable {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String document;

    @OneToOne
    private Address address;

    @OneToMany(mappedBy = "client")
    private List<Phone> phone;

    @ElementCollection
    private List<String> emails = new ArrayList<>();
}
