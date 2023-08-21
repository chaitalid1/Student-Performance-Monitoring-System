package com.s2p.dto;

public class DepartmentDTO {
    private long deptId;

    private String deptName;
    private String HOD;
    private int staffCount;
    private String phone;
    private String email;
    private String Description;

    public DepartmentDTO() {
    }

    public DepartmentDTO(long deptId, String deptName, String HOD, int staffCount, String phone, String email, String description) {
        this.deptId = deptId;
        this.deptName = deptName;
        this.HOD = HOD;
        this.staffCount = staffCount;
        this.phone = phone;
        this.email = email;
        Description = description;
    }

    public long getDeptId() {
        return deptId;
    }

    public void setDeptId(long deptId) {
        this.deptId = deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public String getHOD() {
        return HOD;
    }

    public void setHOD(String HOD) {
        this.HOD = HOD;
    }

    public int getStaffCount() {
        return staffCount;
    }

    public void setStaffCount(int staffCount) {
        this.staffCount = staffCount;
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

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    @Override
    public String toString() {
        return "DepartmentDTO{" +
                "deptId=" + deptId +
                ", deptName='" + deptName + '\'' +
                ", HOD='" + HOD + '\'' +
                ", staffCount=" + staffCount +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", Description='" + Description + '\'' +
                '}';
    }
}
