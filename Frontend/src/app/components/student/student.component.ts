import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { AddStudentComponent } from '../student-operations/add-student/add-student.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ViewStudentComponent } from '../student-operations/view-student/view-student.component';
import { UpdateStudentComponent } from '../student-operations/update-student/update-student.component';
import { DeleteStudentComponent } from '../student-operations/delete-student/delete-student.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // students: any;

  students: Student[] = [];
  student!: Student;
  showAddStudent = false;
  sortByFirstName = false;
  sortByUSNNo = false;

  usnno = '';
  firstName = '';
  middleName = '';
  lastName = '';
  fatherName = '';
  motherName = '';
  parentEmail = '';
  fatherPhone = '';
  motherPhone = '';
  gender = '';
  dob = '';
  email = '';
  phone = '';
  yearOfAdmission = '';
  address = '';
  studentId!: number;
  teacherGuardian = '';

  constructor(private studentService: StudentService, private router: Router, private formBuilder: FormBuilder, private modalService: BsModalService) { 
    this.loadStudents();

  }

  navBack(){
    this.router.navigate(['dashboard']);
  }
  studentForm!: FormGroup;

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      middleName: [null],
      lastName: [null, Validators.required],
      usnno: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      dob: [null, Validators.required],
      gender: [null, Validators.required],
      yearOfAdmission: [null, [Validators.required]],
      address: [null, [Validators.required]],
      fatherName: [null, [Validators.required]],
      fatherPhone: [null, [Validators.required]],
      motherName: [null, [Validators.required]],
      motherPhone: [null, [Validators.required]],
      parentEmail: [null, [Validators.required, Validators.email]],
      teacherGuardian: [null, [Validators.required]]
    });
    this.loadStudents();
  }


  loadStudents() {
    this.studentService.getStudents().subscribe(
      students => {
        this.students = students;
      },
      error => {
        console.log('Error occurred while fetching students:', error);
      }
    );
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  getStudentsByFirstName() {
    this.studentService.getStudentsByFirstName()
      .subscribe(students => this.students = students);
      
  }

  getStudentsByUSNNo() {
    this.studentService.getStudentsByUSNNo()
      .subscribe(students => this.students = students);
      
  }

  getStudentById(studentId: number) {
    this.studentService.getStudentById(studentId)
    .subscribe(students => this.student = students);
  }

  sortByName(){
    this.sortByUSNNo = false;
    if(this.sortByFirstName == false){
      this.sortByFirstName = true;
      this.sortByName();
    }
    else
    this.sortByFirstName = false;
    
  }

  sortByUSN(){
    this.sortByFirstName = false;
    if(this.sortByUSNNo == false){
      this.sortByUSNNo = true;
      this.sortByName();
    }
    else
    this.sortByUSNNo = false;
  }
 
  modalData: any;
  s: any;

  bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  fetchedData: any;

  showAddStudentForm(){
    this.bsModalRef = this.modalService.show(AddStudentComponent);
  }

  viewDetails(studentId: number){
    this.studentService.getStudentById(studentId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(ViewStudentComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });
  }

  updateDetails(studentId: number, s: Student){
    this.studentService.getStudentById(studentId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(UpdateStudentComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });


    this.loadStudents();

  }

  deleteDetails(studentId: number){
    this.studentService.getStudentById(studentId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(DeleteStudentComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });

  }

  setId(studentId: number){
    this.studentId = studentId;
  }

  getId():number{
    return this.studentId;
  }


  addStudent(studentData: Student) {
    if (this.studentForm.valid) {
      this.studentService.createStudent(studentData).subscribe(
        createdStudent => {
          console.log('Student created successfully:', createdStudent);
          alert("Student added successfully!")
          this.studentForm.reset();
          this.loadStudents();
        },
        error => {
          console.log('Error occurred while creating student:', error);
        }
      );
    }
  }

  createStudent(student: Student) {
    this.studentService.createStudent(student).subscribe(
      createdStudent => {
        console.log('Student created successfully:', createdStudent);
        this.getStudents();
        this.studentForm.reset();
        alert("Student created successfully!")
        this.showAddStudentForm();
      },
      error => {
        console.log('Error occurred while creating Student:', error);
      }
    );
  }

  updateStudent(student: Student) {
    this.studentService.updateStudent(student.studentId, student).subscribe(
      updatedStudent => {
        console.log('Student updated successfully:', updatedStudent);
        this.loadStudents();
      },
      error => {
        console.log('Error occurred while updating student:', error);
      }
    );
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      () => {
        console.log('Student deleted successfully');
        this.loadStudents();
      },
      error => {
        console.log('Error occurred while deleting student:', error);
      }
    );
  }

}



