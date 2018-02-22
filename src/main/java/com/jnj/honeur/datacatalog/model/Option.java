package com.jnj.honeur.datacatalog.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Document(collection = "options")
@TypeAlias("Option")
public class Option implements Serializable{

    @Id
    public String id;

    @TextIndexed
    @NotNull
    public String type;
    @TextIndexed
    @NotNull
    public String value;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Option{" +
                "type='" + type + '\'' +
                ", value='" + value + '\'' +
                '}';
    }
}
