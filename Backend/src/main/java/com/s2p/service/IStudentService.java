package com.s2p.service;

import com.s2p.dto.DepartmentDTO;
import com.s2p.dto.StudentDTO;
import com.s2p.model.Student;

import java.util.List;

public interface IStudentService {
    public List<StudentDTO> getAll();
    public StudentDTO add(StudentDTO s);
    public List<StudentDTO> findByFirstName(String firstName);
    public List<StudentDTO> findByDepartment(String deptName);
    public void updateAttendance(List<Long> presentStudentIds);
//    public StudentDTO updateStudent(Long id, StudentDTO s);
//    public StudentDTO getStudentById(Long id);
    public void deleteStudent(Long id);
    public List<StudentDTO> getAllStudentsSortedByFirstNameAsc();
    public List<StudentDTO> getAllStudentsSortedByUSNNoAsc();
    public StudentDTO getStudentById(Long id);

    public StudentDTO updateStudent(Long id, StudentDTO studentDTO);

}
