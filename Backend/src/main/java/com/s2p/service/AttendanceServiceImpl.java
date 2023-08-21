package com.s2p.service;

import com.s2p.dao.AttendanceRepository;
import com.s2p.dto.AttendanceDTO;
import com.s2p.dto.StudentDTO;
import com.s2p.model.Attendance;
import com.s2p.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class AttendanceServiceImpl implements IAttendanceService {
    private final AttendanceRepository attendanceRepository;

    @Autowired
    public AttendanceServiceImpl(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public List<AttendanceDTO> getAll() {
        return convertListAttendanceToListDTO(attendanceRepository.findAll());
    }

    @Override
    public void markAttendance(AttendanceDTO attendanceDTO) {
        Attendance attendance = new Attendance();
        attendance.setStudentId(attendanceDTO.getStudentId());
        attendance.setPresent(attendanceDTO.isPresent());
        attendance.setSubject(attendanceDTO.getSubject());
        attendanceRepository.save(attendance);
    }

    public AttendanceDTO add(AttendanceDTO a){
        Attendance a1 = convertAttendanceDTOToAttendance(a);
        Attendance a2 = attendanceRepository.save(a1);
        return convertAttendanceToDTO(a2);
    }


    public static List<AttendanceDTO> convertListAttendanceToListDTO(List<Attendance> ls){
        ArrayList<AttendanceDTO> als = new ArrayList<>();
        Iterator<Attendance> it = ls.iterator();
        while(it.hasNext()){
            Attendance s = it.next();
            als.add(convertAttendanceToDTO(s));
        }
        return als;
    }

    public static AttendanceDTO convertAttendanceToDTO(Attendance s){
        AttendanceDTO s1 = new AttendanceDTO();
        s1.setStudentId(s.getStudentId());
        s1.setPresent(s.isPresent());
        s1.setSubject(s.getSubject());
        s1.setId(s.getId());
        s1.setLectureNo(s.getLectureNo());

        return s1;
    }

    public static Attendance convertAttendanceDTOToAttendance(AttendanceDTO s1){
        Attendance s = new Attendance();
        s.setStudentId(s1.getStudentId());
        s.setPresent(s1.isPresent());
        s.setSubject(s1.getSubject());
        s.setId(s1.getId());
        s.setLectureNo(s1.getLectureNo());
        return s;
    }

    public int getTotalAttendanceCount(Long studentId, String courseName) {
        List<Attendance> attendanceList = attendanceRepository.findByStudentIdAndSubject(studentId, courseName);
        return attendanceList.size();
    }

    public int getTotalPresentAttendanceCount(Long studentId, String courseName) {
        List<Attendance> attendanceList = attendanceRepository.findByStudentIdAndSubject(studentId, courseName);
        int presentCount = 0;
        for (Attendance attendance : attendanceList) {
            if (attendance.isPresent()) {
                presentCount++;
            }
        }
        return presentCount;
    }

    public int getOverallAttendanceCount(Long studentId){
        List<Attendance> attendanceList = attendanceRepository.findByStudentId(studentId);
        return attendanceList.size();
    }
    public int getOverallPresentAttendanceCount(Long studentId){
        List<Attendance> attendanceList = attendanceRepository.findByStudentId(studentId);
        int presentCount = 0;
        for (Attendance attendance : attendanceList) {
            if (attendance.isPresent()) {
                presentCount++;
            }
        }
        return presentCount;
    }


}