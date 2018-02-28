package com.jnj.honeur.datacatalog.repository;

import com.jnj.honeur.datacatalog.model.Data;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepository extends MongoRepository<Data, String> {

}
