package com.garreto.client_app.user;

import javax.persistence.*;

@Entity
public class User {

    @Id
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private UserRole userRole;
}

enum UserRole {
    ADMINISTRATOR,
    COMMON
}
