package com.s2p.dto;

public class AttendanceDTO {

    private Long id;
    private Long studentId;
    private boolean isPresent;
    private String subject;
    private int lectureNo;

    public AttendanceDTO() {
    }

    public AttendanceDTO(Long id, Long studentId, boolean isPresent, String subject, int lectureNo) {
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
