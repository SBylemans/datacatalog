package com.jnj.honeur.datacatalog.controller;

import com.jnj.honeur.datacatalog.model.DataView;
import com.jnj.honeur.datacatalog.model.Option;
import com.jnj.honeur.datacatalog.model.Principal;
import com.jnj.honeur.datacatalog.service.DataService;
import io.buji.pac4j.subject.Pac4jPrincipal;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
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
    @RequiresRoles("admin")
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
    @RequiresRoles("admin")
    public Option saveOption(@Valid @RequestBody Option option){
        LOG.debug("Saved option: %s", option);
        return dataService.saveOption(option);
    }

    @GetMapping(value = "/options")
    public List<Option> getAllOptions(){
        Subject subject = SecurityUtils.getSubject();

        PrincipalCollection principalCollection = subject.getPrincipals();
        String name = "";
        if (principalCollection != null && !principalCollection.isEmpty()) {
            Pac4jPrincipal principal = (Pac4jPrincipal) subject.getPrincipals().getPrimaryPrincipal();
            name = principal.getName();
            System.out.println("Profile: "+principal.getProfile());
        }
        System.out.println("Name: " + name);
        return dataService.getAllOptions();
    }

    @GetMapping(value="/user")
    public Principal getSecurity(Pac4jPrincipal principal){
        Principal p = new Principal(principal.getName(), principal.getProfile().getRoles());
        return p;
    }



}
