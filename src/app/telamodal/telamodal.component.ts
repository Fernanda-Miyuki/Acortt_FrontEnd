import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-telamodal',
  templateUrl: './telamodal.component.html',
  styleUrls: ['./telamodal.component.scss']
})
export class TelamodalComponent {
  constructor(
    private modalService: NgbModal
  ) {}

  closeModal():void {
    this.modalService.dismissAll();
  }
}
