package com.jnj.honeur.datacatalog.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

@Document(collection = "dataview")
public class DataView implements Serializable {

    public String name;
    public Map<String, List<String>> meta;
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
}
