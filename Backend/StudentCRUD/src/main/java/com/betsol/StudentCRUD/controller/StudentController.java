package com.betsol.StudentCRUD.controller;


import com.betsol.StudentCRUD.entity.StudentEntity;
import com.betsol.StudentCRUD.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping
    public String addStudent(@RequestBody StudentEntity student){
       return studentService.addStudent(student);
    }

    @DeleteMapping("/{usn}")
    public String deleteStudent(@PathVariable String usn){
        return studentService.deleteStudent(usn);
    }

    @GetMapping
    public List<StudentEntity>getData(){
        return studentService.getData();
    }

    @GetMapping("/{usn}")
    public String getStudentUsn(@PathVariable String usn){

        return studentService.getStudentInfo(usn);
    }


}
