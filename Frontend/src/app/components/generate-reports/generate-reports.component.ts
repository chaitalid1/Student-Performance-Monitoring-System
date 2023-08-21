import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentComponent } from '../student/student.component';
import { Marks } from 'src/app/models/marks';
import { Attendance } from 'src/app/models/attendance';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent {
  @Input() data: any;
  // @Input() data1!: any[];
  @Input() data2!: Marks[];
  @Input() data3!: any;
  @Input() data4!: any;
  @Input() data5!: any;



  students: Student[] = [];
  student!: Student;
  s!: StudentComponent;

  studentId: number =0;

  id!:number;

  constructor(private studentService: StudentService, private router: Router, 
    private formBuilder: FormBuilder, private modalService: BsModalService, public bsModalRef: BsModalRef, public modalRef: BsModalRef) { }

  ngOnInit() {
  }

  getStudentById(studentId: number) {
    this.studentService.getStudentById(studentId)
    .subscribe(student => this.student = student);
  }

  close() {
    this.bsModalRef.hide();
    this.router.navigate(['reports'])
  }
}
