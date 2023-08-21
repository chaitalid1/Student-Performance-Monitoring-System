import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentComponent } from '../../student/student.component';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  @Input() data: any;

  students: Student[] = [];
  student!: Student;
  // s!: StudentComponent;

  studentForm!: FormGroup;
  id!:number;

  studentId: number =0;
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
  // studentId!: number;
  teacherGuardian = '';

  constructor(private studentService: StudentService, private router: Router, 
    private formBuilder: FormBuilder, private modalService: BsModalService, public bsModalRef: BsModalRef) { 

    }



  ngOnInit() {

    this.studentForm = this.formBuilder.group({
      firstName: [this.data.firstName, Validators.required],
      middleName: [this.data.middleName],
      lastName: [this.data.lastName, Validators.required],
      usnno: [this.data.usnno, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      phone: [this.data.phone, Validators.required],
      dob: [this.data.dob, Validators.required],
      gender: [this.data.gender, Validators.required],
      yearOfAdmission: [this.data.yearOfAdmission, [Validators.required]],
      address: [this.data.address, [Validators.required]],
      fatherName: [this.data.fatherName, [Validators.required]],
      fatherPhone: [this.data.fatherPhone, [Validators.required]],
      motherName: [this.data.motherName, [Validators.required]],
      motherPhone: [this.data.motherPhone, [Validators.required]],
      parentEmail: [this.data.parentEmail, [Validators.required, Validators.email]],
      teacherGuardian: [this.data.teacherGuardian, [Validators.required]]
    });

  }

  getStudentById(studentId: number) {
    this.studentService.getStudentById(studentId)
    .subscribe(student => this.student = student);
  }

  close() {
    this.bsModalRef.hide();
    this.router.navigate(['student'])
  }




  showUpdateForm(student: Student){
    this.student = student;
    console.log(student.studentId);
  }

  s: Student = {studentId: 0, usnno : '', firstName : '', middleName : '', lastName : '', fatherName : '', motherName : '',
    parentEmail : '', fatherPhone : '', motherPhone : '', gender : '', DOB : '', email : '', phone : '', yearOfAdmission : 0,
    address : '', teacherGuardian : ''}

  updateStudent(student: Student){
    console.log(this.data.studentId);

    this.s.studentId = this.data.studentId;
    this.s.firstName = student.firstName;
    this.s.middleName = student.middleName;
    this.s.lastName = student.lastName;
    this.s.fatherName = student.fatherName;
    this.s.motherName = student.motherName;
    this.s.parentEmail = student.parentEmail;
    this.s.fatherPhone = student.fatherPhone;
    this.s.motherPhone = student.motherPhone;
    this.s.gender = student.gender;
    this.s.DOB = student.DOB;
    this.s.email = student.email;
    this.s.phone = student.phone;
    this.s.yearOfAdmission = student.yearOfAdmission;
    this.s.address = student.address;
    this.s.teacherGuardian = student.teacherGuardian;
    this.s.usnno = student.usnno;

    this.studentService.updateStudent(this.data.studentId, this.s)
    .subscribe(response => {
      this.studentForm.reset();
      alert("Student updated successfully!");
      console.log(this.data.studentId);
      }, error => {
        console.log(error);
      }
    );

    this.close();



  }





}
