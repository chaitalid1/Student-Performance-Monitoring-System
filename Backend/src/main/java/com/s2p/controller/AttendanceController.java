package com.s2p.controller;

import com.s2p.dao.StudentRepository;
import com.s2p.dto.AttendanceDTO;
import com.s2p.dto.StudentDTO;
import com.s2p.model.Student;
import com.s2p.service.IAttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {
    @Autowired
    private StudentRepository studentRepository;


    @Autowired
    private IAttendanceService attendanceService;

    @GetMapping("/students")
    public Iterable<Student> getStudents() {
        return studentRepository.findAll();
    }

    @GetMapping("/getAll")
    public List<AttendanceDTO> getAll() {
        return attendanceService.getAll();
    }

    @PostMapping("/add")
    public void markAttendance(@RequestBody AttendanceDTO a) {
        attendanceService.add(a);
    }

    @GetMapping("/total-count")
    public ResponseEntity<Integer> getTotalAttendanceCount(@RequestParam Long studentId,
                                                           @RequestParam String courseName) {
        int totalCount = attendanceService.getTotalAttendanceCount(studentId, courseName);
        return ResponseEntity.ok(totalCount);
    }

    @GetMapping("/present-count")
    public ResponseEntity<Integer> getTotalPresentAttendanceCount(@RequestParam Long studentId,
                                                                  @RequestParam String courseName) {
        int presentCount = attendanceService.getTotalPresentAttendanceCount(studentId, courseName);
        return ResponseEntity.ok(presentCount);
    }

    @GetMapping("/all-total-count")
    public ResponseEntity<Integer> getOverallAttendanceCount(@RequestParam Long studentId) {
        int totalCount = attendanceService.getOverallAttendanceCount(studentId);
        return ResponseEntity.ok(totalCount);
    }

    @GetMapping("/total-present-count")
    public ResponseEntity<Integer> getOverallPresentAttendanceCount(@RequestParam Long studentId) {
        int presentCount = attendanceService.getOverallPresentAttendanceCount(studentId);
        return ResponseEntity.ok(presentCount);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<AttendanceDTO> getAttendanceByStudentId(@PathVariable Long id) {
//        AttendanceDTO student = attendanceService.getAttendanceByStudentId(id);
//        return ResponseEntity.ok(student);
//    }
}
