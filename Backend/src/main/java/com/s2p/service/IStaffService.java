package com.s2p.service;

import com.s2p.dto.StaffDTO;
import com.s2p.dto.StudentDTO;
import com.s2p.dto.SubjectDTO;
import com.s2p.model.Staff;

import java.util.List;

public interface IStaffService {
    public List<StaffDTO> getAll();
    public StaffDTO add(StaffDTO s);
//    public List<Staff> findByDesignation(String designation);
    public void deleteStaff(Long id);
    public StaffDTO updateStaff(Long id, StaffDTO staffDTO);
    public StaffDTO getStaffById(Long id);


}
