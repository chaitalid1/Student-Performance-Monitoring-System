package com.s2p.dao;

import com.s2p.dto.AttendanceDTO;
import com.s2p.model.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
//    public List<Attendance> findByStudentName(String studentName);
    List<Attendance> findByStudentIdAndSubject(Long studentId, String subjectName);
    List<Attendance> findByStudentId(Long studentId);
//    public int findByStudentIdAndSubject(Long studentId, String courseName);
    
}
