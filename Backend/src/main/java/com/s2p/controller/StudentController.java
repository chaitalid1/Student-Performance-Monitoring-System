package com.s2p.controller;

import com.s2p.dto.DepartmentDTO;
import com.s2p.dto.StudentDTO;
import com.s2p.model.Student;
import com.s2p.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController

@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    IStudentService studentService;

    @GetMapping("/getAll")
    public List<StudentDTO> getAll(){
        return studentService.getAll();
    }

    @PostMapping("/add")
    public StudentDTO add(@RequestBody StudentDTO s){
        return studentService.add(s);
    }

    @GetMapping("/getByName")
    public List<StudentDTO> getByFirstName() {
        return studentService.findByFirstName("Chaitali");
    }

    @GetMapping("/getByDepartment")
    public List<StudentDTO> findByDepartment() {
        return studentService.findByDepartment("CSE");
    }


    @GetMapping("/{id}")
    public ResponseEntity<StudentDTO> getStudentById(@PathVariable Long id) {
        StudentDTO student = studentService.getStudentById(id);
        return ResponseEntity.ok(student);
    }


    @PutMapping("/{id}")
    public ResponseEntity<StudentDTO> updateStudent(
            @PathVariable("id") Long id, @RequestBody StudentDTO studentDTO) {
        StudentDTO updatedStudent = studentService.updateStudent(id, studentDTO);
        if (updatedStudent != null) {
            return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }




    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable("id") Long id) {
        studentService.deleteStudent(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @GetMapping("/sorted-by-marks")
    public List<StudentDTO> getStudentsSortedByMarks() {
        return studentService.getAllStudentsSortedByFirstNameAsc();
    }

    @GetMapping("/sorted-by-usnno")
    public List<StudentDTO> getStudentsSortedByUSNNo() {
        return studentService.getAllStudentsSortedByUSNNoAsc();
    }


}
