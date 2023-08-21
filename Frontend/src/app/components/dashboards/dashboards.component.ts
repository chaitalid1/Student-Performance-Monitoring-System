import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent {
  bsModalRef!: BsModalRef;
  authService: any;
  router: any;

  constructor(private modalService: BsModalService){}


  logout(){
    this.authService.logout();   
    this.router.navigate(['/login']);
    
  }

  openModal() {
    this.bsModalRef = this.modalService.show(ModalComponent);
  }
  
}



