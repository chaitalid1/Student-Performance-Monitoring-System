package com.s2p.dao;

import com.s2p.model.Student;
import com.s2p.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
    public Subject findById(long subjectId);


}
