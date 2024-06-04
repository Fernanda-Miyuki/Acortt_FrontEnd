import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-telamodal',
  templateUrl: './telamodal.component.html',
  styleUrls: ['./telamodal.component.scss']
})
export class TelamodalComponent implements OnInit {
  isImageSelected: boolean = false;
  showImageError: boolean = false;
  imagEmBase64: string | ArrayBuffer | null = null;
  mainForm!: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.mainForm = this.fb.group({
      nomeProduto: ['', Validators.required],
      marcaProduto: ['', Validators.required],
      imagem: [null, Validators.required],
      valorProduto: ['', Validators.required],
      categoriaProduto: ['', Validators.required],
      descricaoProduto: ['', Validators.required]
    });
  }

  submitProduct() {
    const formValue = {
      nomeProduto: this.mainForm.get('nomeProduto')!.value,
      marcaProduto: this.mainForm.get('marcaProduto')!.value,
      imagem: this.imagEmBase64!,
      valorProduto: this.mainForm.get('valorProduto')!.value,
      categoriaProduto: this.mainForm.get('categoriaProduto')!.value,
      descricaoProduto: this.mainForm.get('descricaoProduto')!.value
    }

    console.log(formValue)
    this.mainForm.reset()

  }

  closeModal(): void {
    this.modalService.dismissAll();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.isImageSelected = true;
      this.showImageError = false; // Resetar o erro quando a imagem for selecionada
      this.onFileChange(event);
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.mainForm.controls['imagem'].patchValue(reader.result);
      const base64String = reader.result as string;
      this.imagEmBase64 = base64String;
      // console.log(this.imagEmBase64)
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}