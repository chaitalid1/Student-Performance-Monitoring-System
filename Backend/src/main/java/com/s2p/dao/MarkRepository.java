package com.s2p.dao;

import com.s2p.dto.MarkDTO;
import com.s2p.model.Mark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MarkRepository extends JpaRepository<Mark, Long> {
//    public MarkDTO findByStudentId(long studentId);
    List<Mark> findByStudentId(long studentId);
}
