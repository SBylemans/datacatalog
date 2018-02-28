package com.jnj.honeur.datacatalog.model;

import java.io.Serializable;
import java.util.Set;

public class Principal implements Serializable {
    String name;
    Set<String> roles;

    public String getName() {
        return name;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public Principal(String name, Set<String> roles) {
        this.name = name;
        this.roles = roles;
    }
}
