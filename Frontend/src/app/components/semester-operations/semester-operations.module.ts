import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteSemesterComponent } from './delete-semester/delete-semester.component';
import { ViewSemesterComponent } from './view-semester/view-semester.component';
import { AddSemesterComponent } from './add-semester/add-semester.component';
import { UpdateSemesterComponent } from './update-semester/update-semester.component';



@NgModule({
  declarations: [
    DeleteSemesterComponent,
    ViewSemesterComponent,
    AddSemesterComponent,
    UpdateSemesterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SemesterOperationsModule { }
