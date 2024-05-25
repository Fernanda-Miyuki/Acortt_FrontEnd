import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-telamodal',
  templateUrl: './telamodal.component.html',
  styleUrls: ['./telamodal.component.scss']
})
export class TelamodalComponent {
  @ViewChild('imagemInput') imagemInput: any; // ViewChild para acessar o input de imagem

  fileList: string[] = [];

  constructor(private modalService: NgbModal) {}

  closeModal(): void {
    this.modalService.dismissAll();
  }

  onFileSelect(): void {
    const files: FileList | null = this.imagemInput.nativeElement.files;
    this.fileList = [];
    if (!files || files.length === 0) {
      this.fileList.push('Nenhuma imagem selecionada');
    } else {
      for (let i = 0; i < files.length; i++) {
        this.fileList.push(files[i].name);
      }
    }
  }

  removeFile(index: number): void {
    this.fileList.splice(index, 1);
    // Limpar o valor do input de arquivo para permitir que o usuário selecione o mesmo arquivo novamente
    this.imagemInput.nativeElement.value = '';
  }
}
