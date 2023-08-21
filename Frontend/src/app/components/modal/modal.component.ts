import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  showModal = false;
  title: string = 'Modal Title';

  constructor(public bsModalRef: BsModalRef) {}

  close() {
    this.bsModalRef.hide();
    // this.showModal = false
  }


}
