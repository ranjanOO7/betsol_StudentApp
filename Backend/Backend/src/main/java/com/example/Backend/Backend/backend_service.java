package com.example.Backend.Backend;


import com.mysql.cj.x.protobuf.MysqlxDatatypes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Service
public class backend_service {
    @Autowired
    backend_dao dao;

    public void addRecord(backend_entity obj){
        dao.save(obj);
    }
    public void remove(backend_entity obj){ dao.delete(obj); }
    public List<backend_entity>list(){
        return dao.findAll();
    }

}
