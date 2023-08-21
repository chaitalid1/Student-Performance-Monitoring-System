import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Semester } from 'src/app/models/semester';
import { SemesterService } from 'src/app/services/semester.service';
import { DeleteSemesterComponent } from '../semester-operations/delete-semester/delete-semester.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent {
  students: any;
  showAddSemesterForm = false;

  semester: Semester[] = [];

  semId = 0;
  semName = '';
  credits = 0;
  year = 0;
  status = '';

  semesterForm! : FormGroup;

  ngOnInit() {
    this.semesterForm = this.formBuilder.group({
      semId: [null, Validators.required],
      semName: [null, Validators.required],
      credits: [null, Validators.required],
      year: [null, Validators.required],
      status: [null, Validators.required]
  
    });
    this.getSemester();
  }
  
  showSsemesterForm(){
    if(this.showAddSemesterForm == false){
      this.showAddSemesterForm = true;
    }
    else
    this.showAddSemesterForm = false;
  
  }

  constructor(private semesterService: SemesterService, private router: Router, private formBuilder: FormBuilder, private modalService: BsModalService) { }

  navBack(){
    this.router.navigate(['dashboard']);
  }

  getSemester() {
    this.semesterService.getSemester().subscribe(
      semester => {
        this.semester = semester;
      },
      error => {
        console.log(error);
      }
    );
  }

  addSemester(semester: Semester) {
    this.semesterService.addSemester(semester).subscribe(
      response => {
        this.getSemester();
      },
      error => {
        console.log(error);
      }
    );
  }

  createSemester(Semester: Semester) {
    this.semesterService.createSemester(Semester).subscribe(
      createdSemester => {
        console.log('Semester created successfully:', createdSemester);
        this.getSemester();
        this.semesterForm.reset();
        alert("Semester created successfully!")
        this.showSemester();
      },
      error => {
        console.log('Error occurred while creating Semester:', error);
      }
    );
  }

  showSemester(){
    if(this.showAddSemesterForm == false){
      this.showAddSemesterForm = true;
    }
    else
    this.showAddSemesterForm = false;

  }


  deleteSemester(id: number) {
    this.semesterService.deleteSemester(id).subscribe(
      () => {
        console.log('Semester deleted successfully');
        this.getSemester();
      },
      error => {
        console.log('Error occurred while deleting semester:', error);
      }
    );
  }


  updateSemester(semester: Semester) {
    this.semesterService.updateSemester(semester.semId, semester).subscribe(
      updatedSemester => {
        console.log('Semester updated successfully:', updatedSemester);
        // this.loadSemesters();
      },
      error => {
        console.log('Error occurred while updating semester:', error);
      }
    );
  }

  
  bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  fetchedData: any;

  deleteDetails(semId: number){
    this.semesterService.getSemesterById(semId).subscribe((data) => {
      this.fetchedData = data;
      this.modalRef = this.modalService.show(DeleteSemesterComponent, {
        initialState: {
          data: this.fetchedData,
        },
      });
    });

  }
}
