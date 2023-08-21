import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Student } from 'src/app/models/student';
import { Subjects } from 'src/app/models/subjects';
import { MarksService } from 'src/app/services/marks.service';
import { ViewStudentMarksComponent } from '../marks-operations/view-student-marks/view-student-marks.component';
import { StudentService } from 'src/app/services/student.service';
import { Marks } from 'src/app/models/marks';
import { ViewAllMarksComponent } from '../marks-operations/view-all-marks/view-all-marks.component';
import { Subject } from 'rxjs';
import { SubjectsService } from 'src/app/services/subjects.service';
import { NgPipesModule, NgArrayPipesModule } from 'ngx-pipes';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  students: Student[] = [];
  subject: string = '';
  lectureNo: number = 0;
  showMessageIndex: number | null = null;
  showUpdateMarksForm = false;
  
  noOfSubjects = 0;

  showUpdateForm: boolean[] = [false];

  subjects: Subjects[] = [];

  

  marksForm! : FormGroup;
  marks1 : Marks[] = [];
  subjects1: Subjects[] = [];
  student1: Student[] = [];
  marks2 : Marks[] = [];

  markForInput: number = 0;

  constructor(private http: HttpClient, private subjectService: SubjectsService, private studentService: StudentService, private router: Router, private marksService: MarksService, private formBuilder: FormBuilder, private modalService: BsModalService) {
    this.markForInput = 0;
   }

  ngOnInit() {
    this.marksForm = this.formBuilder.group({
      marks: [null, Validators.required]
    });
    
    this.fetchStudents();
    this.fetchSubjects();

    this.getMarks();
    this.getSubjects();

    
  }

  showMarks = true

  showMarksField(){
    if (this.showMarks == true)
    {
      this.showMarks = false
    }
    else
    this.showMarks = true
  }


  count = 0;


  studentMarks = [];


  getMarksByStudentIdOneByOne(student1: Student[]) {
    for(let i=0;i<this.student1.length;i++){
      this.marksService.getMarksById(student1[i].studentId).subscribe(marks2 => this.marks2 = marks2);
    }
  }


  fetchStudents() {
    
    this.http.get<any[]>('http://localhost:8080/api/student/getAll').subscribe(
      data => this.students = data,
      error => console.log(error)
    );
    
  }

  fetchSubjects() {
    
    this.http.get<any[]>('http://localhost:8080/api/subject/getSubjectNames').subscribe(
      data => this.subjects = data,
      error => console.log(error)
    );

  }



  markAttendance(studentId: number, present: boolean, subject: string, lectureNo: number, i: number) {
    if(subject=='' && lectureNo == 0){
      alert("Please enter subject and lecture no.")
    }
    else if (subject==''){
      alert("Please enter subject")
    }
    else if (lectureNo==0){
      alert("Please enter lecture no.")
    }
    else{
      const data = {
        lectureNo,
        subject,
        studentId,
        present 
      };       
      this.http.post('http://localhost:8080/api/marks/add', data).subscribe(
        () => console.log('Attendance marked successfully.'),
        error => console.log(error)
      );
      }
  }


  navBack(){
    this.router.navigate(['dashboard']);
  }

  showForm(){
    if(this.showUpdateMarksForm==false)
    this.showUpdateMarksForm=true;
    else
    this.showUpdateMarksForm=false;
  }

  showForm1(i: number){
    if(this.showUpdateForm[i]==false)
    this.showUpdateForm[i] = true;
    else
    this.showUpdateForm[i] = false;
  }

  subjectName: string[] = [];

  updateMarks(index: number){
    for (let i = 0; i < this.marks.length; i++){
      this.marks[i] = 0;
    }
    
    this.fetchSubjects();
    
    this.showForm();
    this.showMessage(index);
    // this.showForm();

    // this.subjectName = String(this.subjects).split(" ");
    console.log(this.subjects);
  }

  messages: string[] = [];
  showingMessages: boolean[] = [];
  marks: number[] = [];
    
  showMessage(index: number) {
    this.showingMessages[index] = true;
    this.messages[index] = 'Marks updated!';
    // this.buttonDisabled = true;
  }

  

  studentName :string= '';

  saveMarks(studentId: number, subjects: Subjects[], marks: number[], firstName: string, lastName: string , i: number ){
    console.log(subjects);    

    for (let i = 0; i < this.marks.length; i++) {
      const data = {
        studentId, subjectName: subjects[i], marks: marks[i], 
        studentName :firstName+ " " + lastName
      };

      this.http.post('http://localhost:8080/api/marks/add', data).subscribe(
        () => console.log('Marks updated successfully.'),
        error => console.log(error)
      );
      
    }
    alert("Marks updated successfully!");
    this.showForm();
    this.showMessage(i);

    // this.marksForm.reset();
    this.markForInput= 0;
    
  }

  bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  fetchedData: Marks[]= [];
  fetchedData1: any;

  getSubjects(): void {
    this.subjectService.getSubjects().subscribe(subjects1 => this.subjects1 = subjects1);
  }

  getMarks(): void {
    this.marksService.getMarks().subscribe(marks1 => this.marks1 = marks1);
  }


  showViewAllMarks = false

  showAllMarks() {
    if (this.showViewAllMarks == false)
    {
      this.showViewAllMarks = true
    }
    else
    this.showViewAllMarks = false
  }

  viewAllMarks(){
    this.showAllMarks();
    this.showMarksField();

  }

  viewMarks(studentId: number){

    this.marksService.getMarksById(studentId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(ViewStudentMarksComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });

  }

  data1: any;
  data2: any;


  openModalWithData(data1: any, data2: any) {
    // const initialState = {
    //   data1: data1,
    //   data2: data2
    // };
    // this.modalService.show(ViewStudentMarksComponent, { initialState });
  }

  fetchData(studentId: number) {
    this.marksService.fetchSubjects().subscribe(data1 => {
      this.studentService.getStudentById(studentId).subscribe(data2 => {
        this.openModalWithData(data1, data2);
      });
    });
    
  }





  
}
