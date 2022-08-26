package com.betsol.StudentCRUD.service;

import com.betsol.StudentCRUD.DAO.StudentDAO;
import com.betsol.StudentCRUD.entity.StudentEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentDAO dao;


    public String addStudent(StudentEntity student){
        dao.save(student);
        return "student "+student.getFname()+" added successfully";
    }

    public String updateStudent(StudentEntity student){
        dao.save(student);
        return "student "+student.getFname()+" is updated successfully";
    }


    public String deleteStudent(String usn){
        StudentEntity student= (StudentEntity) dao.getById(usn);
        dao.delete(student);
        return "student"+student.getFname()+"has been successfully deleted";
    }

    public List<StudentEntity>getData(){
        return dao.findAll();
    }

    public String getStudentInfo(String usn){
        StudentEntity student= (StudentEntity) dao.getById(usn);
        return student.getUsn()+ " "+student.getFname()+" "+student.getLname()+" "+student.getEmail()+" "+student.getBranch()+" "+student.getCgpa();
    }


}
