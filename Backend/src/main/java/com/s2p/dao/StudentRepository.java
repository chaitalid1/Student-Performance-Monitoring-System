package com.s2p.dao;

import com.s2p.dto.StudentDTO;
import com.s2p.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findByFirstName(String firstName);
    List<Student> findByDepartment(String deptName);
//    public StudentDTO updateStudent(Long id, StudentDTO s);
    public List<Student> findAllByOrderByFirstNameAsc();
    public List<Student> findAllByOrderByUSNNoAsc();
    public Student findById(long studentId);

}