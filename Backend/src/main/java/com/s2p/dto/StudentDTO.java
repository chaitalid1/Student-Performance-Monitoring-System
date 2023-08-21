package com.s2p.dto;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Date;
import java.util.List;

public class StudentDTO {

    private long studentId;
    private String USNNo;
    private String firstName;
    private String middleName;
    private String lastName;
    private String DOB;
    private String phone;
    private String email;
    private String gender;
    private int yearOfAdmission;
    private String address;
    private String department;
    private String semester;
    private String fatherName;
    private String motherName;
    private String parentEmail;
    private String fatherPhone;
    private String motherPhone;
    private boolean present;
    private String teacherGuardian;

    public StudentDTO() {
    }

    public StudentDTO(long studentId, String USNNo, String firstName, String middleName, String lastName, String DOB, String phone, String email, String gender, int yearOfAdmission, String address, String department, String semester, String fatherName, String motherName, String parentEmail, String fatherPhone, String motherPhone, boolean  present, String teacherGuardian) {
        this.studentId = studentId;
        this.USNNo = USNNo;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.DOB = DOB;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.yearOfAdmission = yearOfAdmission;
        this.address = address;
        this.department = department;
        this.semester = semester;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.parentEmail = parentEmail;
        this.fatherPhone = fatherPhone;
        this.motherPhone = motherPhone;
        this.present = present;
        this.teacherGuardian = teacherGuardian;
    }

    public long getStudentId() {
        return studentId;
    }

    public void setStudentId(long studentId) {
        this.studentId = studentId;
    }

    public String getUSNNo() {
        return USNNo;
    }

    public void setUSNNo(String USNNo) {
        this.USNNo = USNNo;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDOB() {
        return DOB;
    }

    public void setDOB(String DOB) {
        this.DOB = DOB;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getYearOfAdmission() {
        return yearOfAdmission;
    }

    public void setYearOfAdmission(int yearOfAdmission) {
        this.yearOfAdmission = yearOfAdmission;
    }

    public String getAddress() {
        return (String) address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getParentEmail() {
        return parentEmail;
    }

    public void setParentEmail(String parentEmail) {
        this.parentEmail = parentEmail;
    }

    public String getFatherPhone() {
        return fatherPhone;
    }

    public void setFatherPhone(String fatherPhone) {
        this.fatherPhone = fatherPhone;
    }

    public String getMotherPhone() {
        return motherPhone;
    }

    public void setMotherPhone(String motherPhone) {
        this.motherPhone = motherPhone;
    }

    public boolean isPresent() {
        return present;
    }

    public void setPresent(boolean present) {
        this.present = present;
    }

    public String getTeacherGuardian() {
        return teacherGuardian;
    }

    public void setTeacherGuardian(String teacherGuardian) {
        this.teacherGuardian = teacherGuardian;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentId=" + studentId +
                ", USNNo='" + USNNo + '\'' +
                ", firstName='" + firstName + '\'' +
                ", middleName='" + middleName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", DOB=" + DOB +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", Gender='" + gender + '\'' +
                ", yearOfAdmission=" + yearOfAdmission +
                ", address=" + address +
                ", department=" + department +
                ", semester=" + semester +
                ", fatherName='" + fatherName + '\'' +
                ", motherName='" + motherName + '\'' +
                ", ParentEmail='" + parentEmail + '\'' +
                ", fatherPhone='" + fatherPhone + '\'' +
                ", motherPhone='" + motherPhone + '\'' +
                ", present='" + present + '\'' +
                ", teacherGuardian='" + teacherGuardian + '\'' +
                '}';
    }
}
