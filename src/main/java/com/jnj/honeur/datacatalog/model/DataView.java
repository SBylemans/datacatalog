package com.jnj.honeur.datacatalog.model;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;
import java.util.Map;

public class DataView implements Serializable {

    @NotNull
    public String name;
    @NotNull
    public Map<String, List<String>> meta;
    @NotNull
    public String freeText;

    public Map<String, List<String>> getMeta() {
        return meta;
    }

    public void setMeta(Map<String, List<String>> meta) {
        this.meta = meta;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFreeText() {
        return freeText;
    }

    public void setFreeText(String freeText) {
        this.freeText = freeText;
    }

    @Override
    public String toString() {
        return "DataView{" +
                "name='" + name + '\'' +
                ", meta=" + meta +
                ", description='" + freeText + '\'' +
                '}';
    }
}
