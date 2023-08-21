package com.s2p.model;

import javax.persistence.*;

@Table
@Entity(name = "subject")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long subjectId;
    private String courseName;
    private String courseCode;
    private int credits;
    private String description;

    private String department;

    private String semester;

    public Subject() {
    }

    public Subject(long subjectId, String courseName, String courseCode, int credits, String description, String department, String semester) {
        this.subjectId = subjectId;
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.credits = credits;
        this.description = description;
        this.department = department;
        this.semester = semester;
    }

    public long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(long subjectId) {
        this.subjectId = subjectId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public int getCredits() {
        return credits;
    }

    public void setCredits(int credits) {
        this.credits = credits;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }


    @Override
    public String toString() {
        return "Subject{" +
                "subjectId=" + subjectId +
                ", courseName='" + courseName + '\'' +
                ", courseCode='" + courseCode + '\'' +
                ", credits=" + credits +
                ", Description='" + description + '\'' +
                ", department=" + department +
                ", semester=" + semester +
                '}';
    }


}
