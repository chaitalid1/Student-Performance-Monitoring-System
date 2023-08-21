package com.s2p.controller;

import com.s2p.dto.SemesterDTO;
import com.s2p.dto.StaffDTO;
import com.s2p.dto.SubjectDTO;
import com.s2p.service.IStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/staff")
public class StaffController {
    @Autowired
    IStaffService staffService;

    @GetMapping("/getAll")
    public List<StaffDTO> getAll(){
        return staffService.getAll();
    }

    @PostMapping("/add")
    public StaffDTO add(@RequestBody StaffDTO s){
        return staffService.add(s);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStaff(@PathVariable("id") Long id) {
        staffService.deleteStaff(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StaffDTO> updateSemester(
            @PathVariable("id") Long id, @RequestBody StaffDTO staffDTO) {
        StaffDTO updatedStaff = staffService.updateStaff(id, staffDTO);
        if (updatedStaff != null) {
            return new ResponseEntity<>(updatedStaff, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<StaffDTO> getStaffById(@PathVariable Long id) {
        StaffDTO staff = staffService.getStaffById(id);
        return ResponseEntity.ok(staff);
    }
}
