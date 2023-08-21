import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-delete-staff',
  templateUrl: './delete-staff.component.html',
  styleUrls: ['./delete-staff.component.css']
})
export class DeleteStaffComponent {
  @Input() data: any;

  staffs: Staff[] = [];
  staff!: Staff;

  constructor(private staffService: StaffService, private router: Router, public bsModalRef: BsModalRef, private formBuilder: FormBuilder, private modalService: BsModalService) { 

  }

  ngOnInit() {

  }



 
  modalData: any;
  s: any;

  // bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  fetchedData: any;
 

  deleteStaff(id: number) {
    this.staffService.deleteStaff(id).subscribe(
      () => {
        console.log('Staff deleted successfully');
        this.close();
      },
      error => {
        console.log('Error occurred while deleting staff:', error);
      }
    );
  }

  close() {
    this.bsModalRef.hide();
  }
}
