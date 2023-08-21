package com.s2p.service;

import com.s2p.dao.DepartmentRepository;
import com.s2p.dto.DepartmentDTO;
import com.s2p.model.Department;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

@Service
public class DepartmentServiceImpl implements IDepartmentService {
    @Autowired
    DepartmentRepository departmentRepository;

    public List<DepartmentDTO> getAll() {
        return convertListDepartmentToListDTO(departmentRepository.findAll());
    }

    public static List<DepartmentDTO> convertListDepartmentToListDTO(List<Department> ls) {
        ArrayList<DepartmentDTO> als = new ArrayList<>();
        Iterator<Department> it = ls.iterator();
        while (it.hasNext()) {
            Department s = it.next();
            als.add(convertDepartmentToDTO(s));
        }
        return als;
    }

    public static DepartmentDTO convertDepartmentToDTO(Department s) {
        DepartmentDTO s1 = new DepartmentDTO();
        s1.setEmail(s.getEmail());
        s1.setPhone(s.getPhone());
        s1.setDeptId(s.getDeptId());
        s1.setDeptName(s.getDeptName());
        s1.setDescription(s.getDescription());
        s1.setHOD(s.getHOD());
        s1.setStaffCount(s.getStaffCount());
        return s1;
    }

    public static Department convertDepartmentDTOToDepartment(DepartmentDTO s1) {
        Department s = new Department();
        s.setEmail(s1.getEmail());
        s.setPhone(s1.getPhone());
        s.setDeptId(s1.getDeptId());
        s.setDeptName(s1.getDeptName());
        s.setDescription(s1.getDescription());
        s.setHOD(s1.getHOD());
        s.setStaffCount(s1.getStaffCount());
        return s;
    }

    public DepartmentDTO add(DepartmentDTO s) {
        Department s1 = convertDepartmentDTOToDepartment(s);
        Department s2 = departmentRepository.save(s1);
        return convertDepartmentToDTO(s2);
    }


    @Override
    public DepartmentDTO getDepartmentById(Long id) {
        Department d = new Department();
        d.setDeptId(id);
        Optional<Department> optionalDepartment = departmentRepository.findById(d.getDeptId());
        Department department = optionalDepartment.get();
        return convertToDTO(department);
    }

    @Override
    public DepartmentDTO createDepartment(DepartmentDTO departmentDTO) {
        Department department = convertToEntity(departmentDTO);
        Department savedDepartment = departmentRepository.save(department);
        return convertToDTO(savedDepartment);
    }

    @Override
    public DepartmentDTO updateDepartment(Long id, DepartmentDTO d) {
        Optional<Department> optionalDepartment = departmentRepository.findById(id);
        Department existingDepartment = optionalDepartment.get();

        if (d.getDeptName() != null && !Objects.equals(existingDepartment.getDeptName(), d.getDeptName())) {
            existingDepartment.setDeptName(d.getDeptName());
        }
        if (d.getEmail() != null && !Objects.equals(existingDepartment.getEmail(), d.getEmail())) {
            existingDepartment.setEmail(d.getEmail());
        }
        if (d.getHOD() != null  && !Objects.equals(existingDepartment.getHOD(), d.getHOD())) {
            existingDepartment.setHOD(d.getHOD());
        }
        if (d.getPhone() != null && !Objects.equals(existingDepartment.getPhone(), d.getPhone())) {
            existingDepartment.setPhone(d.getPhone());
        }
        if (d.getStaffCount() != 0 && !Objects.equals(existingDepartment.getStaffCount(), d.getStaffCount())) {
            existingDepartment.setStaffCount(d.getStaffCount());
        }
        if (d.getDescription() != null && !Objects.equals(existingDepartment.getDescription(), d.getDescription())) {
            existingDepartment.setDescription(d.getDescription());
        }

        Department updatedDepartment = departmentRepository.save(existingDepartment);
        return convertToDTO(updatedDepartment);
    }

    @Override
    public void deleteDepartment(Long id) {
        departmentRepository.deleteById(id);
    }

    private DepartmentDTO convertToDTO(Department department) {
        DepartmentDTO departmentDTO = new DepartmentDTO();
        BeanUtils.copyProperties(department, departmentDTO);
        return departmentDTO;
    }

    private Department convertToEntity(DepartmentDTO departmentDTO) {
        Department department = new Department();
        BeanUtils.copyProperties(departmentDTO, department);
        return department;
    }


}
