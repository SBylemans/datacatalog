package com.jnj.honeur.datacatalog.service;

import com.jnj.honeur.datacatalog.model.DataView;
import com.jnj.honeur.datacatalog.model.Option;

import java.util.List;

public interface DataService {

    List<DataView> findAll();

    DataView findById(String id);

    DataView saveData(DataView data);

    List<DataView> searchForText(String text);

    Option saveOption(Option option);

    List<Option> getAllOptions();
}
