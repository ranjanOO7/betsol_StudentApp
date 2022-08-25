package com.example.Backend.Backend;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student")
public class backend_entity {

    @Id
    private String usn;
    private String name;
    private String email;
    private String grade;
    public  backend_entity(){}
    public backend_entity(String usn, String name, String email, String grade) {
        this.usn = usn;
        this.name = name;
        this.email = email;
        this.grade = grade;
    }

    public void setUsn(String usn) {
        this.usn = usn;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getUsn() {
        return usn;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getGrade() {
        return grade;
    }
}
