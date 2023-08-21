package com.s2p.controller;

import com.s2p.dto.StudentDTO;
import com.s2p.dto.SubjectDTO;
import com.s2p.service.ISubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/subject")
public class SubjectController {
    @Autowired
    ISubjectService subjectService;

    @GetMapping("/getAll")
    public List<SubjectDTO> getAll(){
        return subjectService.getAll();
    }

    @PostMapping("/add")
    public SubjectDTO add(@RequestBody SubjectDTO s){
        return subjectService.add(s);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubject(@PathVariable("id") Long id) {
        subjectService.deleteSubject(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/getSubjectNames")
    public List<String> getSubjectNames() {
        return subjectService.getAllSubjectNames();
    }

    @PutMapping("/{id}")
    public ResponseEntity<SubjectDTO> updateStudent(
            @PathVariable("id") Long id, @RequestBody SubjectDTO subjectDTO) {
        SubjectDTO updatedSubject = subjectService.updateSubject(id, subjectDTO);
        if (updatedSubject != null) {
            return new ResponseEntity<>(updatedSubject, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubjectDTO> getSubjectById(@PathVariable Long id) {
        SubjectDTO subject = subjectService.getSubjectById(id);
        return ResponseEntity.ok(subject);
    }

}
