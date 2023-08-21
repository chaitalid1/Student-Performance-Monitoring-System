package com.s2p.service;

import com.s2p.dao.MarkRepository;
import com.s2p.dto.MarkDTO;
import com.s2p.model.Mark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class MarkServiceImpl implements IMarkService{
    private final MarkRepository markRepository;

    @Autowired
    public MarkServiceImpl(MarkRepository markRepository) {
        this.markRepository = markRepository;
    }

    @Override
    public List<MarkDTO> getAll() {
        return convertListMarkToListDTO(markRepository.findAll());
    }

    @Override
    public void addMarks(MarkDTO markDTO) {
        Mark mark = new Mark();
        mark.setStudentId(markDTO.getStudentId());
        mark.setMarkId(markDTO.getMarkId());
        mark.setMarks(markDTO.getMarks());
        mark.setStudentName(markDTO.getStudentName());
        mark.setSubjectName(markDTO.getSubjectName());
        markRepository.save(mark);
    }

    public MarkDTO add(MarkDTO a){
        Mark a1 = convertMarkDTOToMark(a);
        Mark a2 = markRepository.save(a1);
        return convertMarkToDTO(a2);
    }


    public static List<MarkDTO> convertListMarkToListDTO(List<Mark> ls){
        ArrayList<MarkDTO> als = new ArrayList<>();
        Iterator<Mark> it = ls.iterator();
        while(it.hasNext()){
            Mark s = it.next();
            als.add(convertMarkToDTO(s));
        }
        return als;
    }

    public static MarkDTO convertMarkToDTO(Mark s){
        MarkDTO s1 = new MarkDTO();
        s1.setStudentId(s.getStudentId());
        s1.setMarkId(s.getMarkId());
        s1.setMarks(s.getMarks());
        s1.setStudentName(s.getStudentName());
        s1.setSubjectName(s.getSubjectName());
        s1.setExamType(s.getExamType());

        return s1;
    }

    public static Mark convertMarkDTOToMark(MarkDTO s1){
        Mark s = new Mark();
        s.setStudentId(s1.getStudentId());
        s.setMarkId(s1.getMarkId());
        s.setMarks(s1.getMarks());
        s.setStudentName(s1.getStudentName());
        s.setSubjectName(s1.getSubjectName());
        s.setExamType(s1.getExamType());
        return s;
    }

    @Override
    public List<MarkDTO> getMarkByStudentId(long id) {
        Mark s = new Mark();
        s.setStudentId(id);
        Optional<List<Mark>> optionalStudent = Optional.ofNullable(markRepository.findByStudentId(s.getStudentId()));
        List<Mark> s1 = optionalStudent.get();
        return convertListMarkToListDTO(s1);
    }

//    public MarksService(MarksRepository marksRepository) {
//        this.marksRepository = marksRepository;
//    }

//    public List<Mark> getMarksByStudentId(long studentId) {
//
//        return markRepository.findByStudentId(studentId);
//    }

}
