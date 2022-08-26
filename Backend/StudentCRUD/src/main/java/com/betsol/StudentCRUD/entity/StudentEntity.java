package com.betsol.StudentCRUD.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Student_CRUD")
public class StudentEntity {

    public StudentEntity(){
        super();
    }

    public StudentEntity(String usn, String fname, String lname, String email, String branch, double cgpa) {
        this.usn = usn;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.branch = branch;
        this.cgpa = cgpa;
    }

    @Id
    @Column(length = 10)
    private String usn;

    @Column(nullable = true)
    private String fname;

    private String lname;

    @Column(nullable = true)
    private String email;

    private String branch;
    @Column()
    private double cgpa;

    public String getUsn() {
        return usn;
    }

    public void setUsn(String usn) {
        this.usn = usn;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }


}
