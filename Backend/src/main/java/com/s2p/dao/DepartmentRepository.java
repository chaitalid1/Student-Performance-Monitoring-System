package com.s2p.dao;

import com.s2p.dto.DepartmentDTO;
import com.s2p.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
//    public DepartmentDTO add(Department s);

//    <S extends Department> Optional<S> getDeptById(Long id);


//    List<DepartmentDTO> getAllDepartments();
//    public DepartmentDTO getDepartmentById(Long id);
//    public DepartmentDTO createDepartment(DepartmentDTO departmentDTO);
//    public DepartmentDTO updateDepartment(Long id, DepartmentDTO departmentDTO);
}
