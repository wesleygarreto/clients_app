package com.garreto.client_app.client.models;

import javax.persistence.*;

@Entity
public class Address {

    @Id
    @GeneratedValue
    private Integer id;

    @OneToOne
    private Client client;

    @Column(nullable = false)
    private String zipCode;

    @Column(nullable = false)
    private String street;

    @Column(nullable = false)
    private String district;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    private String complement;
}
