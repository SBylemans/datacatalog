package com.jnj.honeur.datacatalog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/datacatalog")
    public String index(){
        return "index";
    }
}
