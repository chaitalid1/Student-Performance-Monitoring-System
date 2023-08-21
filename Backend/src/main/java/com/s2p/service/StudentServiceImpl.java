package com.s2p.service;

import com.s2p.dao.AttendanceRepository;
import com.s2p.dao.StudentRepository;
import com.s2p.dto.DepartmentDTO;
import com.s2p.dto.StudentDTO;
import com.s2p.model.Attendance;
import com.s2p.model.Department;
import com.s2p.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StudentServiceImpl implements IStudentService{

    @Autowired
    StudentRepository studentRepository;

//    @Autowired
//    AttendanceRepository attendanceRepository;

    @Autowired
    AttendanceServiceImpl attendanceService;

    @Override
    public List<StudentDTO> getAll() {
        return convertListStudentToListDTO(studentRepository.findAll());
    }

    public static List<StudentDTO> convertListStudentToListDTO(List<Student> ls){
        ArrayList<StudentDTO> als = new ArrayList<>();
        Iterator<Student> it = ls.iterator();
        while(it.hasNext()){
            Student s = it.next();
            als.add(convertStudentToDTO(s));
        }
        return als;
    }

    public static StudentDTO convertStudentToDTO(Student s){
        StudentDTO s1 = new StudentDTO();
        s1.setStudentId(s.getStudentId());
        s1.setAddress(s.getAddress());
        s1.setDepartment(s.getDepartment());
        s1.setDOB(s.getDOB());
        s1.setEmail(s.getEmail());
        s1.setFatherName(s.getFatherName());
        s1.setFatherPhone(s.getFatherPhone());
        s1.setFirstName(s.getFirstName());
        s1.setGender(s.getGender());
        s1.setLastName(s.getLastName());
        s1.setMiddleName(s.getMiddleName());
        s1.setFirstName(s.getFirstName());
        s1.setMotherName(s.getMotherName());
        s1.setMotherPhone(s.getMotherPhone());
        s1.setParentEmail(s.getParentEmail());
        s1.setPhone(s.getPhone());
        s1.setSemester(s.getSemester());
        s1.setYearOfAdmission(s.getYearOfAdmission());
        s1.setUSNNo(s.getUSNNo());
        s1.setTeacherGuardian(s.getTeacherGuardian());

        return s1;
    }

    public static Student convertStudentDTOToStudent(StudentDTO s1){
        Student s = new Student();
        s.setStudentId(s1.getStudentId());
        s.setAddress(s1.getAddress());
        s.setDepartment(s1.getDepartment());
        s.setDOB(s1.getDOB());
        s.setEmail(s1.getEmail());
        s.setFatherName(s1.getFatherName());
        s.setFatherPhone(s1.getFatherPhone());
        s.setFirstName(s1.getFirstName());
        s.setGender(s1.getGender());
        s.setLastName(s1.getLastName());
        s.setMiddleName(s1.getMiddleName());
        s.setFirstName(s1.getFirstName());
        s.setMotherName(s1.getMotherName());
        s.setMotherPhone(s1.getMotherPhone());
        s.setParentEmail(s1.getParentEmail());
        s.setPhone(s1.getPhone());
        s.setSemester(s1.getSemester());
        s.setYearOfAdmission(s1.getYearOfAdmission());
        s.setUSNNo(s1.getUSNNo());
        s.setTeacherGuardian(s1.getTeacherGuardian());

        return s;
    }

    @Override
    public StudentDTO add(StudentDTO s) {
        Student s1 = convertStudentDTOToStudent(s);
        Student s2 = studentRepository.save(s1);
        return convertStudentToDTO(s2);
    }

    @Override
    public List<StudentDTO> findByFirstName(String firstName) {
        return convertListStudentToListDTO(studentRepository.findByFirstName(firstName));
    }

    @Override
    public List<StudentDTO> findByDepartment(String deptName) {
        return convertListStudentToListDTO(studentRepository.findByDepartment(deptName));
    }

    @Override
    public void updateAttendance(List<Long> presentStudentIds) {
        List<Student> students = studentRepository.findAllById(presentStudentIds);
        for (Student student : students) {
            student.setPresent(true);

        }
        studentRepository.saveAll(students);
    }


    @Override
    public StudentDTO getStudentById(Long id) {
        Student s = new Student();
        s.setStudentId(id);
        Optional<Student> optionalStudent = Optional.ofNullable(studentRepository.findById(s.getStudentId()));
        Student s1 = optionalStudent.get();
        return convertStudentToDTO(s1);
    }
//
//    @Override
//    public StudentDTO updateStudent(Long id, StudentDTO s) {
//        Optional<Student> optionalStudent = studentRepository.findById(id);
//
//            Student existingStudent = optionalStudent.get();
//
//            existingStudent.setStudentId(s.getStudentId());
//            existingStudent.setEmail(s.getEmail());
//            existingStudent.setPhone(s.getPhone());
//            existingStudent.setUSNNo(s.getUSNNo());
//            existingStudent.setFirstName(s.getFirstName());
//            existingStudent.setAddress(s.getAddress());
//            existingStudent.setDepartment(s.getDepartment());
//            existingStudent.setDOB(s.getDOB());
//            existingStudent.setMiddleName(s.getMiddleName());
//            existingStudent.setLastName(s.getLastName());
////            existingStudent.setStudentId(s.ge);
//
//            Student updatedStudent = studentRepository.save(existingStudent);
//
//            return convertStudentToDTO(updatedStudent);
//
//    }

    @Override
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    @Override
    public List<StudentDTO> getAllStudentsSortedByFirstNameAsc(){
        return convertListStudentToListDTO(studentRepository.findAllByOrderByFirstNameAsc());
    }

    @Override
    public List<StudentDTO> getAllStudentsSortedByUSNNoAsc(){
        return convertListStudentToListDTO(studentRepository.findAllByOrderByUSNNoAsc());
    }


    @Override
    public StudentDTO updateStudent(Long id, StudentDTO s) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        Student existingStudent = optionalStudent.get();

        if (s.getFirstName() != null && !Objects.equals(existingStudent.getFirstName(), s.getFirstName())) {
            existingStudent.setFirstName(s.getFirstName());
        }
        if (s.getMiddleName() != null && !Objects.equals(existingStudent.getMiddleName(), s.getMiddleName())) {
            existingStudent.setMiddleName(s.getMiddleName());
        }
        if (s.getLastName() != null && !Objects.equals(existingStudent.getLastName(), s.getLastName())) {
            existingStudent.setLastName(s.getLastName());
        }
        if (s.getEmail() != null && !Objects.equals(existingStudent.getEmail(), s.getEmail())) {
            existingStudent.setEmail(s.getEmail());
        }
        if (s.getDOB() != null && !Objects.equals(existingStudent.getDOB(), s.getDOB())) {
            existingStudent.setDOB(s.getDOB());
        }
        if (s.getGender() != null  && !Objects.equals(existingStudent.getGender(), s.getGender())) {
            existingStudent.setGender(s.getGender());
        }
        if (s.getPhone() != null && !Objects.equals(existingStudent.getPhone(), s.getPhone())) {
            existingStudent.setPhone(s.getPhone());
        }
        if (s.getDepartment() != null && !Objects.equals(existingStudent.getDepartment(), s.getDepartment())) {
            existingStudent.setDepartment(s.getDepartment());
        }
        if (s.getAddress() != null && !Objects.equals(existingStudent.getAddress(), s.getAddress())) {
            existingStudent.setAddress(s.getAddress());
        }
        if (s.getParentEmail() != null && !Objects.equals(existingStudent.getParentEmail(), s.getParentEmail())) {
            existingStudent.setParentEmail(s.getParentEmail());
        }
        if (s.getFatherName() != null && !Objects.equals(existingStudent.getFatherName(), s.getFatherName())) {
            existingStudent.setFatherName(s.getFatherName());
        }
        if (s.getMotherName() != null && !Objects.equals(existingStudent.getMotherName(), s.getMotherName())) {
            existingStudent.setMotherName(s.getMotherName());
        }
        if (s.getFatherPhone() != null && !Objects.equals(existingStudent.getFatherPhone(), s.getFatherPhone())) {
            existingStudent.setFatherPhone(s.getFatherPhone());
        }
        if (s.getMotherPhone() != null && !Objects.equals(existingStudent.getMotherPhone(), s.getMotherPhone())) {
            existingStudent.setMotherPhone(s.getMotherPhone());
        }
        if (s.getSemester() != null && !Objects.equals(existingStudent.getSemester(), s.getSemester())) {
            existingStudent.setSemester(s.getSemester());
        }
        if (s.getTeacherGuardian() != null && !Objects.equals(existingStudent.getTeacherGuardian(), s.getTeacherGuardian())) {
            existingStudent.setTeacherGuardian(s.getTeacherGuardian());
        }
        if (s.getYearOfAdmission() != 0000-00-00 && !Objects.equals(existingStudent.getYearOfAdmission(), s.getYearOfAdmission())) {
            existingStudent.setYearOfAdmission(s.getYearOfAdmission());
        }
        if (s.getUSNNo() != null && !Objects.equals(existingStudent.getUSNNo(), s.getUSNNo())) {
            existingStudent.setUSNNo(s.getUSNNo());
        }


        Student updatedStudent = studentRepository.save(existingStudent);
        return convertStudentToDTO(updatedStudent);
    }


}
