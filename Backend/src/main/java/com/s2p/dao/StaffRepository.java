package com.s2p.dao;


import com.s2p.model.Staff;
import com.s2p.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StaffRepository extends JpaRepository<Staff, Long> {
//    public List<Staff> findByDesignation(String designation);
public Staff findById(long staffId);

}
