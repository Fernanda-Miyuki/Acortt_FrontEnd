import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-telamodal',
  templateUrl: './telamodal.component.html',
  styleUrls: ['./telamodal.component.scss']
})
export class TelamodalComponent {
  @ViewChild('imagemInput', { static: false }) imagemInput!: ElementRef<HTMLInputElement>; // ViewChild para acessar o input de imagem

  fileList: File[] = []; // Lista de arquivos

  constructor(private modalService: NgbModal) {}

  closeModal(): void {
    this.modalService.dismissAll();
  }

  onFileSelect(event: Event): void {
    const input = this.imagemInput.nativeElement;
    this.fileList = [];
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.fileList.push(files[i]);
      }
    }
  }

  removeFile(index: number): void {
    this.fileList.splice(index, 1);

    // Atualizar o input de arquivos para refletir a remoção
    const dataTransfer = new DataTransfer();
    this.fileList.forEach(file => dataTransfer.items.add(file));
    this.imagemInput.nativeElement.files = dataTransfer.files;
  }
}
