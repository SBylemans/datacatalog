package com.jnj.honeur.datacatalog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication(exclude = {RepositoryRestMvcAutoConfiguration.class})
@EnableWebMvc
public class DatacatalogApplication extends SpringBootServletInitializer{

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(DatacatalogApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(DatacatalogApplication.class, args);
	}
}
