package com.jnj.honeur.datacatalog.service;

import com.jnj.honeur.datacatalog.model.*;
import com.jnj.honeur.datacatalog.repository.DataRepository;
import com.jnj.honeur.datacatalog.repository.OptionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.mongodb.core.query.TextQuery;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class DataServiceImpl implements DataService{

    private DataRepository dataRepository;
    private OptionsRepository optionsRepository;
    private MongoTemplate mongoTemplate;

    public DataServiceImpl(@Autowired DataRepository dataRepository,
                           @Autowired MongoTemplate mongoTemplate,
                           @Autowired OptionsRepository optionsRepository ) {
        this.dataRepository = dataRepository;
        this.mongoTemplate = mongoTemplate;
        this.optionsRepository = optionsRepository;
    }

    @Override
    public List<DataView> findAll() {
        List<Data> dataList = dataRepository.findAll();
        ArrayList<DataView> result = new ArrayList<>();
        for(Data data: dataList){
            DataView d = getDataViewFromData(data);
            result.add(d);
        }
        return result;
    }

    @Override
    public DataView findById(String id) {
        Data d = dataRepository.findOne(id);
        return getDataViewFromData(d);
    }

    @Override
    public DataView saveData(@Valid DataView dataView) {
        Data d = dataRepository.save(getDataFromDataView(dataView));
        return getDataViewFromData(d);
    }

    @Override
    public List<DataView> searchForText(String text){
        TextCriteria criteria = TextCriteria.forDefaultLanguage().matchingAny(text);
        Query query = TextQuery.queryText(criteria).sortByScore();
        List<Data> dataList = mongoTemplate.find(query, Data.class);
        ArrayList<DataView> result = new ArrayList<>();
        for(Data data: dataList){
            DataView d = getDataViewFromData(data);
            result.add(d);
        }
        return result;
    }

    @Override
    public Option saveOption(@Valid Option option){
        return optionsRepository.save(option);
    }

    @Override
    public List<Option> getAllOptions(){
        return optionsRepository.findAll();
    }


    private DataView getDataViewFromData(Data data) {
        DataView d = new DataView();
        d.setFreeText(data.description);
        d.setName(data.name);
        d.setMeta(new HashMap<>());
        for(Option o: data.meta){
            if(d.meta.get(o.type) == null){
                ArrayList<String> r = new ArrayList<>();
                r.add(o.value);
                d.meta.put(o.type, r);
            } else {
                ArrayList<String> r = new ArrayList<>(d.meta.get(o.type));
                r.add(o.value);
                d.meta.put(o.type, r);
            }
        }
        return d;
    }

    private Data getDataFromDataView(DataView dataView){
        Data d = new Data();
        d.setName(dataView.name);
        d.setDescription(dataView.freeText);
        List<Option> optionList = new ArrayList<>();
        for(String key: dataView.meta.keySet()){
            for(String value: dataView.meta.get(key)){
                Option o = new Option();
                o.setValue(value);
                o.setType(key);
                optionList.add(o);
            }
        }
        d.setMeta(optionList);
        return d;
    }
}
