package com.jnj.honeur.datacatalog.repository;

import com.jnj.honeur.datacatalog.model.Data;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DataRepository extends MongoRepository<Data, String> {

}
