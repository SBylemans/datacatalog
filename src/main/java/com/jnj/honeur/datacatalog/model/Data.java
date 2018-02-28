package com.jnj.honeur.datacatalog.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Document(collection = "data")
@TypeAlias("Data")
public class Data implements Serializable{
    @Id
    public String id;

    @TextIndexed
    @NotNull
    public String name;
    @TextIndexed
    public List<Option> meta;
    @TextIndexed
    @NotNull
    public String description;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Option> getMeta() {
        return meta;
    }

    public void setMeta(List<Option> meta) {
        this.meta = meta;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
