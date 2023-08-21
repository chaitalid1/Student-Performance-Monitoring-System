package com.s2p.model;

import javax.persistence.*;

@Table
@Entity(name = "semester")
public class Semester {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long semId;

    private String semName;
    private int credits;
    private int year; // 1, 2, 3, 4
    private String status;

    public Semester() {
    }

    public Semester(long semId, String semName, int credits, int year, String status) {
        this.semId = semId;
        this.semName = semName;
        this.credits = credits;
        this.year = year;
        this.status = status;
    }

    public long getSemId() {
        return semId;
    }

    public void setSemId(long semId) {
        this.semId = semId;
    }

    public String getSemName() {
        return semName;
    }

    public void setSemName(String semName) {
        this.semName = semName;
    }

    public int getCredits() {
        return credits;
    }

    public void setCredits(int credits) {
        this.credits = credits;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Semester{" +
                "semId=" + semId +
                ", semName='" + semName + '\'' +
                ", credits=" + credits +
                ", Year=" + year +
                ", status='" + status + '\'' +
                '}';
    }
}
