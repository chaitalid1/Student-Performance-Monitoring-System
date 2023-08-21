import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentComponent } from '../../student/student.component';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  @Input() data: any;


  students: Student[] = [];
  student!: Student;
  s!: StudentComponent;

  studentId: number =0;

  id!:number;

  constructor(private studentService: StudentService, private router: Router, 
    private formBuilder: FormBuilder, private modalService: BsModalService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  getStudentById(studentId: number) {
    this.studentService.getStudentById(studentId)
    .subscribe(student => this.student = student);
  }

  close() {
    this.bsModalRef.hide();
    this.router.navigate(['student'])
  }

}
