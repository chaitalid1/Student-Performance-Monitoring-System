package com.s2p.model;

import javax.persistence.*;

@Table
@Entity(name = "marks")
public class Mark {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long markId;
    private long studentId;
    private long marks;
    private String subjectName;
    private String studentName;
    private String examType;

    public Mark() {
    }

    public Mark(long markId, long studentId, long marks, String subjectName, String studentName, String examType) {
        this.markId = markId;
        this.studentId = studentId;
        this.marks = marks;
        this.subjectName = subjectName;
        this.studentName = studentName;
        this.examType = examType;
    }

    public long getMarkId() {
        return markId;
    }

    public void setMarkId(long markId) {
        this.markId = markId;
    }

    public long getStudentId() {
        return studentId;
    }

    public void setStudentId(long studentId) {
        this.studentId = studentId;
    }


    public long getMarks() {
        return marks;
    }

    public void setMarks(long marks) {
        this.marks = marks;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getExamType() {
        return examType;
    }

    public void setExamType(String examType) {
        this.examType = examType;
    }

    @Override
    public String toString() {
        return "Mark{" +
                "markId=" + markId +
                ", studentId=" + studentId +
                ", marks=" + marks +
                ", subjectName='" + subjectName + '\'' +
                ", studentName='" + studentName + '\'' +
                ", examType='" + examType + '\'' +
                '}';
    }
}
