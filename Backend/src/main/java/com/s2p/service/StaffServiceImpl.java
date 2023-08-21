package com.s2p.service;

import com.s2p.dao.StaffRepository;
import com.s2p.dto.DepartmentDTO;
import com.s2p.dto.StaffDTO;
import com.s2p.dto.SubjectDTO;
import com.s2p.model.Department;
import com.s2p.model.Staff;
import com.s2p.model.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StaffServiceImpl implements IStaffService{
    @Autowired
    StaffRepository staffRepository;

    public List<StaffDTO> getAll() {
        return convertListStaffToListDTO(staffRepository.findAll());
    }

    public static List<StaffDTO> convertListStaffToListDTO(List<Staff> ls){
        ArrayList<StaffDTO> als = new ArrayList<>();
        Iterator<Staff> it = ls.iterator();
        while(it.hasNext()){
            Staff s = it.next();
            als.add(convertStaffToDTO(s));
        }
        return als;
    }

    public static StaffDTO convertStaffToDTO(Staff s){
        StaffDTO s1 = new StaffDTO();
        s1.setStaffId(s.getStaffId());
        s1.setDepartment(s.getDepartment());
        s1.setDesignation(s.getDesignation());
        s1.setDOB(s.getDOB());
        s1.setEmail(s.getEmail());
        s1.setDateOfJoining(s.getDateOfJoining());
        s1.setGender(s.getGender());
        s1.setName(s.getName());
        s1.setPhone(s.getPhone());
        s1.setExperience(s.getExperience());

        return s1;
    }

    public static Staff convertStaffDTOToStaff(StaffDTO s1){
        Staff s = new Staff();
        s.setStaffId(s1.getStaffId());
        s.setDepartment(s1.getDepartment());
        s.setDesignation(s1.getDesignation());
        s.setDOB(s1.getDOB());
        s.setEmail(s1.getEmail());
        s.setDateOfJoining(s1.getDateOfJoining());
        s.setGender(s1.getGender());
        s.setName(s1.getName());
        s.setPhone(s1.getPhone());
        s.setExperience(s1.getExperience());

        return s;
    }

    public StaffDTO add(StaffDTO s) {
        Staff s1 = convertStaffDTOToStaff(s);
        Staff s2 = staffRepository.save(s1);
        return convertStaffToDTO(s2);
    }

    @Override
    public void deleteStaff(Long id) {
        staffRepository.deleteById(id);
    }

    @Override
    public StaffDTO updateStaff(Long id, StaffDTO d) {
        Optional<Staff> optionalStaff = staffRepository.findById(id);
        Staff existingStaff = optionalStaff.get();

        if (d.getDepartment() != null && !Objects.equals(existingStaff.getDepartment(), d.getDepartment())) {
            existingStaff.setDepartment(d.getDepartment());
        }
        if (d.getEmail() != null && !Objects.equals(existingStaff.getEmail(), d.getEmail())) {
            existingStaff.setEmail(d.getEmail());
        }
        if (d.getDesignation() != null  && !Objects.equals(existingStaff.getDesignation(), d.getDesignation())) {
            existingStaff.setDesignation(d.getDesignation());
        }
        if (d.getPhone() != null && !Objects.equals(existingStaff.getPhone(), d.getPhone())) {
            existingStaff.setPhone(d.getPhone());
        }
        if (d.getDateOfJoining() != null && !Objects.equals(existingStaff.getDateOfJoining(), d.getDateOfJoining())) {
            existingStaff.setDateOfJoining(d.getDateOfJoining());
        }
        if (d.getDOB() != null && !Objects.equals(existingStaff.getDOB(), d.getDOB())) {
            existingStaff.setDOB(d.getDOB());
        }
        if (d.getName() != null && !Objects.equals(existingStaff.getName(), d.getName())) {
            existingStaff.setName(d.getName());
        }
        if (d.getGender() != null && !Objects.equals(existingStaff.getGender(), d.getGender())) {
            existingStaff.setGender(d.getGender());
        }
        if (d.getExperience() != null && !Objects.equals(existingStaff.getExperience(), d.getExperience())) {
            existingStaff.setExperience(d.getExperience());
        }

        Staff updatedStaff = staffRepository.save(existingStaff);
        return convertStaffToDTO(updatedStaff);
    }

    @Override
    public StaffDTO getStaffById(Long id) {
        Staff s = new Staff();
        s.setStaffId(id);
        Optional<Staff> optionalStaff = Optional.ofNullable(staffRepository.findById(s.getStaffId()));
        Staff s1 = optionalStaff.get();
        return convertStaffToDTO(s1);
    }
}
