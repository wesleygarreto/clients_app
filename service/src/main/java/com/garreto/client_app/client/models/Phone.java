package com.garreto.client_app.client.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Phone {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    private Client client;

    private PhoneType type;

    private Long number;
}

enum PhoneType {
    RESIDENTIAL,
    COMMERCIAL,
    CELL_PHONE,
}
