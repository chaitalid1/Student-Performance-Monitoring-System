package com.s2p.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long studentId;
    private boolean isPresent;
    private String subject;
    private int lectureNo;

    public Attendance() {
    }

    public Attendance(Long id, Long studentId, boolean isPresent, String subject, int lectureNo) {
        this.id = id;
        this.studentId = studentId;
        this.isPresent = isPresent;
        this.subject = subject;
        this.lectureNo = lectureNo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public boolean isPresent() {
        return isPresent;
    }

    public void setPresent(boolean present) {
        isPresent = present;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public int getLectureNo() {
        return lectureNo;
    }

    public void setLectureNo(int lectureNo) {
        this.lectureNo = lectureNo;
    }

    @Override
    public String toString() {
        return "Attendance{" +
                "id=" + id +
                ", studentId=" + studentId +
                ", isPresent=" + isPresent +
                ", subject='" + subject + '\'' +
                ", lectureNo=" + lectureNo +
                '}';
    }
}
