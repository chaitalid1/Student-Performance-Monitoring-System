package com.s2p.service;

import com.s2p.dto.DepartmentDTO;
import com.s2p.model.Department;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

public interface IDepartmentService {
    public List<DepartmentDTO> getAll();
    public DepartmentDTO add(DepartmentDTO s);

    void deleteDepartment(Long id);

    public DepartmentDTO getDepartmentById(Long id);
    public DepartmentDTO createDepartment(DepartmentDTO departmentDTO);
    public DepartmentDTO updateDepartment(Long id, DepartmentDTO departmentDTO);
}
