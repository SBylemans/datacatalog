package com.jnj.honeur.datacatalog.controller;

import com.jnj.honeur.datacatalog.model.DataView;
import com.jnj.honeur.datacatalog.model.Option;
import com.jnj.honeur.datacatalog.service.DataService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class DataController {
    private static final Logger LOG = LoggerFactory.getLogger(DataController.class);

    private DataService dataService;

    public DataController(@Autowired DataService dataService) {
        this.dataService = dataService;
    }

    @CrossOrigin
    @GetMapping(value = "/data", produces = "application/json")
    public List<DataView> getData() {
        return dataService.findAll();
    }

    @PostMapping(value = "/data", produces = "application/json", consumes = "application/json")
    public DataView saveData(@Valid @RequestBody DataView data){
        LOG.debug("Saved data: %s", data);
        return dataService.saveData(data);
    }

    @GetMapping(value = "/search", produces = "application/json")
    public List<DataView> search(@RequestParam("text") String textToSearch){
        LOG.debug("Searched for %s", textToSearch);
        return dataService.searchForText(textToSearch);
    }

    @PostMapping(value = "/option")
    public Option saveOption(@Valid @RequestBody Option option){
        LOG.debug("Saved option: %s", option);
        return dataService.saveOption(option);
    }

    @GetMapping(value = "/options")
    public List<Option> getAllOptions(){
        return dataService.getAllOptions();
    }

}
