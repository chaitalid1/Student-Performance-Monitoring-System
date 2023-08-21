import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';



@NgModule({
  declarations: [
  
    DeleteDepartmentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DepartmentOperationsModule { }
