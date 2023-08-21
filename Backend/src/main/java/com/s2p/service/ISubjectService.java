package com.s2p.service;

import com.s2p.dto.DepartmentDTO;
import com.s2p.dto.StudentDTO;
import com.s2p.dto.SubjectDTO;
import com.s2p.model.Subject;

import java.util.List;

public interface ISubjectService {
    public List<SubjectDTO> getAll();
    public SubjectDTO add(SubjectDTO s);
//    public List<Subject> findBySemesterName(String semName);
//    public List<Subject> findByDepartment(String deptName);
//    public List<Subject> findByStaff(String staffName);
    public void deleteSubject(Long id);

    public List<String> getAllSubjectNames();
    public SubjectDTO updateSubject(Long id, SubjectDTO subjectDTO);
    public SubjectDTO getSubjectById(Long id);

}
