package com.s2p.service;

import com.s2p.dto.SemesterDTO;
import com.s2p.dto.SubjectDTO;

import java.util.List;

public interface ISemesterService {
    public List<SemesterDTO> getAll();
    public SemesterDTO add(SemesterDTO s);
    public void deleteSemester(Long id);
    public SemesterDTO getSemesterById(Long id);

    public SemesterDTO updateSemester(Long id, SemesterDTO semesterDTO);


}
