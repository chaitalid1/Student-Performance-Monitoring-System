package com.s2p.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

public class StaffDTO {

    private long staffId;

    private String name;
    private String phone;
    private String email;
    private String gender;
    private String DOB;
    private String designation;
    private String dateOfJoining;

    private String department;
    private String experience;

    public StaffDTO() {
    }

    public StaffDTO(long staffId, String name, String phone, String email, String gender, String DOB, String designation, String dateOfJoining, String department, String experience) {
        this.staffId = staffId;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.DOB = DOB;
        this.designation = designation;
        this.dateOfJoining = dateOfJoining;
        this.department = department;
        this.experience = experience;
    }

    public long getStaffId() {
        return staffId;
    }

    public void setStaffId(long staffId) {
        this.staffId = staffId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String  getDOB() {
        return DOB;
    }

    public void setDOB(String DOB) {
        this.DOB = DOB;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getDateOfJoining() {
        return dateOfJoining;
    }

    public void setDateOfJoining(String dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    @Override
    public String toString() {
        return "Staff{" +
                "staffId=" + staffId +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", gender='" + gender + '\'' +
                ", DOB=" + DOB +
                ", designation='" + designation + '\'' +
                ", dateOfJoining=" + dateOfJoining +
                ", department=" + department +
                ", experience=" + experience +
                '}';
    }
}
