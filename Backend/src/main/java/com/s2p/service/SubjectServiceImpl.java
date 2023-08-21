package com.s2p.service;

import com.s2p.dao.SubjectRepository;
import com.s2p.dto.DepartmentDTO;
import com.s2p.dto.StudentDTO;
import com.s2p.dto.SubjectDTO;
import com.s2p.model.Department;
import com.s2p.model.Student;
import com.s2p.model.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class SubjectServiceImpl implements ISubjectService{
    @Autowired
    SubjectRepository subjectRepository;

    public List<SubjectDTO> getAll() {
        return convertListSubjectToListDTO(subjectRepository.findAll());
    }

    public static List<SubjectDTO> convertListSubjectToListDTO(List<Subject> ls){
        ArrayList<SubjectDTO> als = new ArrayList<>();
        Iterator<Subject> it = ls.iterator();
        while(it.hasNext()){
            Subject s = it.next();
            als.add(convertSubjectToDTO(s));
        }
        return als;
    }

    public static SubjectDTO convertSubjectToDTO(Subject s){
        SubjectDTO s1 = new SubjectDTO();
        s1.setSubjectId(s.getSubjectId());
        s1.setCourseCode(s.getCourseCode());
        s1.setDepartment(s.getDepartment());
        s1.setSemester(s.getSemester());
        s1.setCourseName(s.getCourseName());
        s1.setCredits(s.getCredits());
        s1.setDescription(s.getDescription());

        return s1;
    }

    public static Subject convertSubjectDTOToSubject(SubjectDTO s1){
        Subject s = new Subject();
        s.setSubjectId(s1.getSubjectId());
        s.setCourseCode(s1.getCourseCode());
        s.setDepartment(s1.getDepartment());
        s.setSemester(s1.getSemester());
        s.setCourseName(s1.getCourseName());
        s.setCredits(s1.getCredits());
        s.setDescription(s1.getDescription());

        return s;
    }

    public SubjectDTO add(SubjectDTO s) {
        Subject s1 = convertSubjectDTOToSubject(s);
        Subject s2 = subjectRepository.save(s1);
        return convertSubjectToDTO(s2);
    }

    @Override
    public void deleteSubject(Long id) {
        subjectRepository.deleteById(id);
    }

    public List<String> getAllSubjectNames() {
        List<Subject> subjects = subjectRepository.findAll();
        return subjects.stream().map(Subject::getCourseName).collect(Collectors.toList());
    }


    @Override
    public SubjectDTO updateSubject(Long id, SubjectDTO d) {
        Optional<Subject> optionalSubject = subjectRepository.findById(id);
        Subject existingSubject = optionalSubject.get();

        if (d.getCourseCode() != null && !Objects.equals(existingSubject.getCourseCode(), d.getCourseCode())) {
            existingSubject.setCourseCode(d.getCourseCode());
        }
        if (d.getDescription() != null && !Objects.equals(existingSubject.getDescription(), d.getDescription())) {
            existingSubject.setDescription(d.getDescription());
        }
        if (d.getCredits() != 0  && !Objects.equals(existingSubject.getCredits(), d.getCredits())) {
            existingSubject.setCredits(d.getCredits());
        }
        if (d.getDepartment() != null && !Objects.equals(existingSubject.getDepartment(), d.getDepartment())) {
            existingSubject.setDepartment(d.getDepartment());
        }
        if (d.getCourseName() != null && !Objects.equals(existingSubject.getCourseName(), d.getCourseName())) {
            existingSubject.setCourseName(d.getCourseName());
        }
        if (d.getSemester() != null && !Objects.equals(existingSubject.getSemester(), d.getSemester())) {
            existingSubject.setSemester(d.getSemester());
        }

        Subject updatedSubject = subjectRepository.save(existingSubject);
        return convertSubjectToDTO(updatedSubject);
    }

    @Override
    public SubjectDTO getSubjectById(Long id) {
        Subject s = new Subject();
        s.setSubjectId(id);
        Optional<Subject> optionalSubject = Optional.ofNullable(subjectRepository.findById(s.getSubjectId()));
        Subject s1 = optionalSubject.get();
        return convertSubjectToDTO(s1);
    }
}
