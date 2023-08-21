import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentComponent } from '../../student/student.component';
import { HttpClient } from '@angular/common/http';
import { Subjects } from 'src/app/models/subjects';
import { MarksService } from 'src/app/services/marks.service';
import { Marks } from 'src/app/models/marks';

@Component({
  selector: 'app-view-student-marks',
  templateUrl: './view-student-marks.component.html',
  styleUrls: ['./view-student-marks.component.css']
})
export class ViewStudentMarksComponent {
  // @Input() data: any;
  @Input() data!: Marks[];
  // @Input() data2: any;


  students: Student[] = [];
  student!: Student;
  s!: StudentComponent;

  studentId: number =0;

  id!:number;

  constructor(private http: HttpClient, private marksService: MarksService, private formBuilder: FormBuilder, private modalService: BsModalService, private studentService: StudentService, private router: Router, 
    public bsModalRef: BsModalRef) {
    // this.markForInput = 0;
    // this.fetchSubjects();

   }



  getStudentById(studentId: number) {
    this.studentService.getStudentById(studentId)
    .subscribe(student => this.student = student);
  }

  close() {
    this.bsModalRef.hide();

  }


  subject: string = '';
  lectureNo: number = 0;
  showMessageIndex: number | null = null;
  showUpdateMarksForm = false;
  
  noOfSubjects = 0;

  showUpdateForm: boolean[] = [false];

  subjects: Subjects[] = [];

  marksForm! : FormGroup;
  markForInput: number = 0;

  subjectNames: any[] = [];

  ngOnInit() {
    this.marksForm = this.formBuilder.group({
      marks: [null, Validators.required]
    });
    
    // this.fetchStudents();
    // this.fetchSubjects();

    // for (let i = 0; i < this.subjects.length; i++){
    //   this.subjectNames[i] = this.subjects[i];
    // }
    
  }


  fetchStudents() {
    
    this.http.get<Student[]>('http://localhost:8080/api/student/getAll').subscribe(
      data => this.students = data,
      error => console.log(error)
    );
    
  }

  fetchSubjects() {
    this.http.get<Subjects[]>('http://localhost:8080/api/subject/getSubjectNames').subscribe(
      data => this.subjects = data,
      error => console.log(error)
    );

  }







}
