package com.betsol.StudentCRUD.DAO;

import com.betsol.StudentCRUD.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentDAO extends JpaRepository <StudentEntity,String> {

}
