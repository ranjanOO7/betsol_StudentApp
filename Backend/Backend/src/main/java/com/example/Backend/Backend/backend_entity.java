package com.example.Backend.Backend;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student")
public class backend_entity {

    @Id
    private String usn;
    @Column
    private String fname;
    @Column
    private String lname;
    @Column
    private String branch;
    @Column(nullable = false)
    private String email;
    @Column
    private String grade;
    public  backend_entity(){}
    public backend_entity(String usn, String fname, String lname, String email, String grade, String branch) {
        this.usn = usn;
        this.lname = lname;
        this.branch = branch;
        this.fname = fname;
        this.email = email;
        this.grade = grade;
    }
    public String getBranch(){
        return branch;
    }
    public  String getLname(){
        return lname;
    }
    public void setBranch(String Branch){
        this.branch = Branch;
    }
    public void setLname(String lname){
        this.lname = lname;
    }

    public void setUsn(String usn) {
        this.usn = usn;
    }

    public void setFName(String fname) {
        this.fname = fname;
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

   public String getFname(){
        return fname;
   }

    public String getEmail() {
        return email;
    }

    public String getGrade() {
        return grade;
    }
}
