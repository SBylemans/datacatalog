package com.jnj.honeur.datacatalog.repository;

import com.jnj.honeur.datacatalog.model.Option;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OptionsRepository extends MongoRepository<Option, String> {
}
