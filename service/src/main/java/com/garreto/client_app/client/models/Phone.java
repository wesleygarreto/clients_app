package com.garreto.client_app.client.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Phone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private PhoneType type;

    private Long number;
}

enum PhoneType {
    RESIDENTIAL,
    COMMERCIAL,
    CELL_PHONE,
}
