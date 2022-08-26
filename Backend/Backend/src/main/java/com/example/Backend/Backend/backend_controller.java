package com.example.Backend.Backend;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class backend_controller {

    @Autowired
    backend_service service;

    @PostMapping
    public void putData(@RequestBody backend_entity entity){
        service.addRecord(entity);
    }

    @GetMapping
    public List<backend_entity> getData(){
        return service.list();
    }

    @DeleteMapping
    public void delete(@RequestBody backend_entity id){
        service.remove(id);
    }
   /* @GetMapping
    public backend_entity getParticularData(){
        return service.
    }*/

}
