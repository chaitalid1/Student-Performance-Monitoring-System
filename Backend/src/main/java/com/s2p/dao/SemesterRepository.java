package com.s2p.dao;

import com.s2p.model.Semester;
import com.s2p.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SemesterRepository extends JpaRepository<Semester, Long> {
    public Semester findById(long semId);


}
