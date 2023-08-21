package com.s2p.service;

import com.s2p.dao.SemesterRepository;
import com.s2p.dto.SemesterDTO;
import com.s2p.dto.StaffDTO;
import com.s2p.dto.SubjectDTO;
import com.s2p.model.Semester;
import com.s2p.model.Staff;
import com.s2p.model.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SemesterServiceImpl implements ISemesterService{
    @Autowired
    SemesterRepository semesterRepository;

    public List<SemesterDTO> getAll() {
        return convertListSemesterToListDTO(semesterRepository.findAll());
    }

    public static List<SemesterDTO> convertListSemesterToListDTO(List<Semester> ls){
        ArrayList<SemesterDTO> als = new ArrayList<>();
        Iterator<Semester> it = ls.iterator();
        while(it.hasNext()){
            Semester s = it.next();
            als.add(convertSemesterToDTO(s));
        }
        return als;
    }

    public static SemesterDTO convertSemesterToDTO(Semester s){
        SemesterDTO s1 = new SemesterDTO();
        s1.setCredits(s.getCredits());
        s1.setSemId(s.getSemId());
        s1.setSemName(s.getSemName());
        s1.setStatus(s.getStatus());
        s1.setYear(s.getYear());

        return s1;
    }

    public static Semester convertSemesterDTOToSemester(SemesterDTO s1){
        Semester s = new Semester();
        s.setCredits(s1.getCredits());
        s.setSemId(s1.getSemId());
        s.setSemName(s1.getSemName());
        s.setStatus(s1.getStatus());
        s.setYear(s1.getYear());

        return s;
    }

    public SemesterDTO add(SemesterDTO s) {
        Semester s1 = convertSemesterDTOToSemester(s);
        Semester s2 = semesterRepository.save(s1);
        return convertSemesterToDTO(s2);
    }

    @Override
    public void deleteSemester(Long id) {
        semesterRepository.deleteById(id);
    }


    @Override
    public SemesterDTO updateSemester(Long id, SemesterDTO d) {
        Optional<Semester> optionalSemester = semesterRepository.findById(id);
        Semester existingSemester = optionalSemester.get();

        if (d.getSemName() != null && !Objects.equals(existingSemester.getSemName(), d.getSemName())) {
            existingSemester.setSemName(d.getSemName());
        }
        if (d.getCredits() != 0  && !Objects.equals(existingSemester.getCredits(), d.getCredits())) {
            existingSemester.setCredits(d.getCredits());
        }
        if (d.getYear() != 0 && !Objects.equals(existingSemester.getYear(), d.getYear())) {
            existingSemester.setYear(d.getYear());
        }
        if (d.getStatus() != null && !Objects.equals(existingSemester.getStatus(), d.getStatus())) {
            existingSemester.setStatus(d.getStatus());
        }


        Semester updatedSemester = semesterRepository.save(existingSemester);
        return convertSemesterToDTO(updatedSemester);
    }

    @Override
    public SemesterDTO getSemesterById(Long id) {
        Semester s = new Semester();
        s.setSemId(id);
        Optional<Semester> optionalSemester = Optional.ofNullable(semesterRepository.findById(s.getSemId()));
        Semester s1 = optionalSemester.get();
        return convertSemesterToDTO(s1);
    }

}
