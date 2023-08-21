import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Subjects } from 'src/app/models/subjects';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DeleteStudentComponent } from '../student-operations/delete-student/delete-student.component';
import { DeleteSubjectComponent } from '../subject-operations/delete-subject/delete-subject.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  students: any;
  subjects: Subjects[] = [];

  subjectId = 0;
  courseName = '';
  courseCode = '';
  credits = 0;
  description = '';
  department = '';
  semester = '';
  staff = '';

  showSubjectForm = false;

  constructor(private subjectsService: SubjectsService, private router: Router, private formBuilder: FormBuilder, private modalService: BsModalService) { }

  subjectForm!: FormGroup;

  navBack(){
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
    this.subjectForm = this.formBuilder.group({
      courseName: [null, Validators.required],
      courseCode: [null, Validators.required],
      credits: [null, Validators.required],
      description: [null, Validators.required],
      department: [null, Validators.required],
      semester: [null, Validators.required],
      staff: [null, Validators.required],
      subjectId: [null, Validators.required]
    });
    this.getSubjects();
  }

  showSubject(){
    if(this.showSubjectForm == false){
      this.showSubjectForm = true;
    }
    else
    this.showSubjectForm = false;

  }  

  getSubjects() {
    this.subjectsService.getSubjects().subscribe(
      subject => {
        this.subjects = subject;
      },
      error => {
        console.log(error);
      }
    );
  }

  createSubject(subject: Subjects) {
    this.subjectsService.createSubject(subject).subscribe(
      createdSubject => {
        console.log('Subject created successfully:', createdSubject);
        this.getSubjects();
        this.subjectForm.reset();
        alert("Subject created successfully!")
        this.showSubject();
      },
      error => {
        console.log('Error occurred while creating Subject:', error);
      }
    );
  }

  deleteSubject(id: number) {
    this.subjectsService.deleteSubject(id).subscribe(
      () => {
        console.log('Subject deleted successfully');
        this.getSubjects();
      },
      error => {
        console.log('Error occurred while deleting Subject:', error);
      }
    );
  }


  updateSubject(subject: Subjects) {
    this.subjectsService.updateSubject(subject.subjectId, subject).subscribe(
      updatedSubject => {
        console.log('Subject updated successfully:', updatedSubject);
        // this.loadSubjects();
      },
      error => {
        console.log('Error occurred while updating subject:', error);
      }
    );
  }


  bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  fetchedData: any;

  deleteDetails(subjectId: number){
    this.subjectsService.getSubjectById(subjectId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(DeleteSubjectComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });

  }




}


