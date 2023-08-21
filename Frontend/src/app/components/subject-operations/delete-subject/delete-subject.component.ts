import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subjects } from 'src/app/models/subjects';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-delete-subject',
  templateUrl: './delete-subject.component.html',
  styleUrls: ['./delete-subject.component.css']
})
export class DeleteSubjectComponent {
  @Input() data: any;

  subjects: Subjects[] = [];
  subject!: Subjects;

  constructor(private subjectService: SubjectsService, private router: Router, public bsModalRef: BsModalRef, private formBuilder: FormBuilder, private modalService: BsModalService) { 

  }

  ngOnInit() {

  }



 
  modalData: any;
  s: any;

  // bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  fetchedData: any;
 

  deleteSubject(id: number) {
    this.subjectService.deleteSubject(id).subscribe(
      () => {
        console.log('Subject deleted successfully');
        this.close();
      },
      error => {
        console.log('Error occurred while deleting subject:', error);
      }
    );
  }

  close() {
    this.bsModalRef.hide();
    this.router.navigate(['subject'])
  }
}
