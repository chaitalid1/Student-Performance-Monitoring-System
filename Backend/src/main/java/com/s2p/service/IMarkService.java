package com.s2p.service;

import com.s2p.dto.MarkDTO;
import com.s2p.model.Mark;

import java.util.List;

public interface IMarkService {
    void addMarks(MarkDTO attendanceDTO);
    public MarkDTO add(MarkDTO a);
    public List<MarkDTO> getAll();
//    public List<MarkDTO> getMarkByStudentId(Long id);
//    public List<Mark> getMarksByStudentId(long studentId);
    public List<MarkDTO> getMarkByStudentId(long id);
//    public MarkDTO getMarkByStudentId(long studentId);
}
