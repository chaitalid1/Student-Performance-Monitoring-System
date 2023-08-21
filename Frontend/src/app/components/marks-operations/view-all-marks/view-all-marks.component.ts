import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Student } from 'src/app/models/student';
import { Subjects } from 'src/app/models/subjects';
import { MarksService } from 'src/app/services/marks.service';
import { StudentService } from 'src/app/services/student.service';
import { StudentComponent } from '../../student/student.component';
import { Marks } from 'src/app/models/marks';

@Component({
  selector: 'app-view-all-marks',
  templateUrl: './view-all-marks.component.html',
  styleUrls: ['./view-all-marks.component.css']
})
export class ViewAllMarksComponent {
  @Input() data: Marks[] = [];

  students: Student[] = [];
  student!: Student;
  s!: StudentComponent;

  studentId: number =0;

  id!:number;

  constructor(private http: HttpClient, private marksService: MarksService, private formBuilder: FormBuilder, private modalService: BsModalService, private studentService: StudentService, private router: Router, 
    public bsModalRef: BsModalRef) {
   }

  getStudentById(studentId: number) {
    this.studentService.getStudentById(studentId)
    .subscribe(student => this.student = student);
  }

  close() {
    this.bsModalRef.hide();
  }

  
  noOfSubjects = 0;

  showUpdateForm: boolean[] = [false];

  subjects: Subjects[] = [];

  // marksForm! : FormGroup;

  ngOnInit() {
    // this.marksForm = this.formBuilder.group({
    //   marks: [null, Validators.required]
    // });
    
  }

  count = 0;

  sizeOf(subjects: Subjects[]){
    for (let i = 0; i < subjects.length; i++){
      this.count += 1;
    }
    return this.count;
  }

  subjectName: string[] = [];
  marks: number[] = [];
  studentName :string= '';
}
