import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
  
  @Input() data: any;


  staffs: Staff[] = [];
  staff!: Staff;

  staffId: number =0;

  id!:number;

  constructor(private staffService: StaffService, private router: Router, 
    private formBuilder: FormBuilder, private modalService: BsModalService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  getStudentById(staffId: number) {
    this.staffService.getStaffById(staffId)
    .subscribe(staff => this.staff = staff);
  }

  close() {
    this.bsModalRef.hide();
    this.router.navigate(['staff'])
  }

}
