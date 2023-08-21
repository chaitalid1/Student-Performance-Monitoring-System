import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  showModal = false;
  title: string = 'Modal Title';

  students: Student[] = [];
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
  teacherGuardian = '';

  constructor(public bsModalRef: BsModalRef, private studentService: StudentService, private router: Router, private formBuilder: FormBuilder) {}


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
  }

  addStudent(studentData: Student) {
    if (this.studentForm.valid) {
      this.studentService.createStudent(studentData).subscribe(
        createdStudent => {
          console.log('Student created successfully:', createdStudent);
          alert("Student added successfully!")
          this.studentForm.reset();
          // this.loadStudents();
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
        // this.showAddStudentForm();
      },
      error => {
        console.log('Error occurred while creating Student:', error);
      }
    );
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }



  close() {
    this.bsModalRef.hide();
    this.router.navigate(['student'])
  }


}
