import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDepartmentComponent {
  @Input() data: any;

  departments: Department[] = [];
  department!: Department;

  constructor(private departmentService: DepartmentService, private router: Router, public bsModalRef: BsModalRef, private formBuilder: FormBuilder, private modalService: BsModalService) { 

  }

  ngOnInit() {

  }



 
  modalData: any;
  s: any;

  // bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  fetchedData: any;
 

  deleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id).subscribe(
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
    this.router.navigate(['department'])
  }
}
