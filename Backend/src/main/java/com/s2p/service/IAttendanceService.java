package com.s2p.service;

import com.s2p.dto.AttendanceDTO;

import java.util.List;

public interface IAttendanceService {
    void markAttendance(AttendanceDTO attendanceDTO);
    public AttendanceDTO add(AttendanceDTO a);
    public List<AttendanceDTO> getAll();
//    public int getAttendanceCountBySubject(String studentName, String courseName);
//    public List<AttendanceDTO> findByStudentName(String studentName);
    public int getTotalAttendanceCount(Long studentId, String subjectName);
    public int getTotalPresentAttendanceCount(Long studentId, String subjectName);
    public int getOverallAttendanceCount(Long studentId);
    public int getOverallPresentAttendanceCount(Long studentId);


}
