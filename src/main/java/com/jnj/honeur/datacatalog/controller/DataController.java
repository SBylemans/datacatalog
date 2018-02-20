package com.jnj.honeur.datacatalog.controller;

import com.jnj.honeur.datacatalog.model.DataView;
import com.jnj.honeur.datacatalog.model.Option;
import com.jnj.honeur.datacatalog.service.DataService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin()
public class DataController {
    private static final Logger LOG = LoggerFactory.getLogger(DataController.class);

    private DataService dataService;

    public DataController(@Autowired DataService dataService) {
        this.dataService = dataService;
    }

    @GetMapping(value = "/data", produces = "application/json")
    @CrossOrigin()
    public List<DataView> getData() {
        return dataService.findAll();
    }

    @PostMapping(value = "/data", produces = "application/json", consumes = "application/json")
    @CrossOrigin()
    public DataView saveData(@RequestBody DataView data){
        return dataService.save(data);
    }

    @GetMapping(value = "/search", produces = "application/json")
    @CrossOrigin()
    public List<DataView> search(@RequestParam("text") String textToSearch){
        LOG.debug("Searched for %s", textToSearch);
        return dataService.searchForText(textToSearch);
    }

    @PostMapping(value = "/option")
    @CrossOrigin()
    public Option saveData(@RequestBody Option option){
        return dataService.saveOption(option);
    }

    @GetMapping(value = "/options")
    @CrossOrigin()
    public List<Option> getAllOptions(){
        return dataService.getAllOptions();
    }

//    @GetMapping("/permissions/{id}")
//    public Permission retrievePermission(@PathVariable int id) {
//        Permission permission = permissionService.findById(id);
//
//        if (permission == null)
//            throw new PermissionNotFoundException("id-" + id);
//
//        return permission;
//    }
}
