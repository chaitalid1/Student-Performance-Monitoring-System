package com.s2p.controller;

import com.s2p.dto.SemesterDTO;
import com.s2p.dto.StaffDTO;
import com.s2p.dto.SubjectDTO;
import com.s2p.service.ISemesterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/semester")
public class SemesterController {
    @Autowired
    ISemesterService semesterService;

    @GetMapping("/getAll")
    public List<SemesterDTO> getAll(){
        return semesterService.getAll();
    }

    @PostMapping("/add")
    public SemesterDTO add(@RequestBody SemesterDTO s){
        return semesterService.add(s);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSemester(@PathVariable("id") Long id) {
        semesterService.deleteSemester(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SemesterDTO> updateSemester(
            @PathVariable("id") Long id, @RequestBody SemesterDTO semesterDTO) {
        SemesterDTO updatedSemester = semesterService.updateSemester(id, semesterDTO);
        if (updatedSemester != null) {
            return new ResponseEntity<>(updatedSemester, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<SemesterDTO> getSemesterById(@PathVariable Long id) {
        SemesterDTO semester = semesterService.getSemesterById(id);
        return ResponseEntity.ok(semester);
    }
}
