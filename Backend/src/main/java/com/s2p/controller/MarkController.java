package com.s2p.controller;

import com.s2p.dao.MarkRepository;
import com.s2p.dao.StudentRepository;
import com.s2p.dao.SubjectRepository;
import com.s2p.dto.AttendanceDTO;
import com.s2p.dto.MarkDTO;
import com.s2p.dto.StudentDTO;
import com.s2p.model.Mark;
import com.s2p.model.Student;
import com.s2p.model.Subject;
import com.s2p.service.IMarkService;
import com.s2p.service.IStudentService;
import com.s2p.service.ISubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/marks")
public class MarkController {

    @Autowired
    private MarkRepository markRepository;

    @Autowired
    private IMarkService markService;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private IStudentService studentService;

    @Autowired
    private SubjectRepository subjectRepository;

    @Autowired
    private ISubjectService subjectService;

    @GetMapping("/getSubjectNames")
    public List<String> getSubjectNames() {
        return subjectService.getAllSubjectNames();
    }

    @GetMapping("/students")
    public Iterable<Student> getStudents() {
        return studentRepository.findAll();
    }

//    @GetMapping("/getAll")
//    public List<AttendanceDTO> getAll() {
//        return markService.getAll();
//    }

    @PostMapping("/add")
    public void addMarks(@RequestBody MarkDTO a) {
        markService.add(a);
    }

    @GetMapping("/getAll")
    public List<MarkDTO> getAll() {
        return markService.getAll();
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<MarkDTO> getMarkByStudentId(@PathVariable Long id) {
//        MarkDTO mark = markService.getMarkByStudentId(id);
//        return ResponseEntity.ok(mark);
//    }

    @GetMapping("/students/{studentId}")
    public ResponseEntity<List<MarkDTO>> getMarksByStudentId(@PathVariable Long studentId) {
        List<MarkDTO> marks = markService.getMarkByStudentId(studentId);
        return ResponseEntity.ok(marks);
    }

}
