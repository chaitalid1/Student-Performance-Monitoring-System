import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Semester } from 'src/app/models/semester';
import { SemesterService } from 'src/app/services/semester.service';

@Component({
  selector: 'app-delete-semester',
  templateUrl: './delete-semester.component.html',
  styleUrls: ['./delete-semester.component.css']
})
export class DeleteSemesterComponent {
  @Input() data: any;

  constructor(private semesterService: SemesterService, private router: Router, public bsModalRef: BsModalRef, private formBuilder: FormBuilder, private modalService: BsModalService) { 

  }
  
  modalRef!: BsModalRef;
  fetchedData: any;
 

  deleteSemester(id: number) {
    this.semesterService.deleteSemester(id).subscribe(
      () => {
        console.log('Semester deleted successfully');
        this.close();
      },
      error => {
        console.log('Error occurred while deleting semester:', error);
      }
    );
  }

  close() {
    this.bsModalRef.hide();
  }
}
