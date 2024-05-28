import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalScreen',
  templateUrl: './modalScreen.component.html',
  styleUrls: ['./modalScreen.component.scss']
})
export class modalScreenComponent {
  constructor(
    private modalService: NgbModal
  ) {}

  closeModal():void {
    this.modalService.dismissAll();
  }
}
