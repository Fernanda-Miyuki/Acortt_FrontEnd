
import { Component } from '@angular/core';

@Component({
  selector: 'app-telamodal',
  templateUrl: './telamodal.component.html',
  styleUrls: ['./telamodal.component.scss']
})
export class TelamodalComponent {
  nomeProduto: string = '';
  categoriaProduto: string = '';
  valorProduto: string = '';
  descricaoProduto: string = '';
  fileList: File[] = [];

  onFileSelect(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.fileList.push(files[i]);
    }
  }

  removeFile(index: number) {
    this.fileList.splice(index, 1);
  }

  onSubmit() {
    // Coleta os dados do formulário:
    console.log('Nome do Produto:', this.nomeProduto);
    console.log('Categoria:', this.categoriaProduto);
    console.log('Valor:', this.valorProduto);
    console.log('Descrição:', this.descricaoProduto);
    console.log('Arquivos:', this.fileList);

    // Faça o que você precisa com os dados, como enviá-los para um servidor.
  }

  closeModal() {
    // Implemente a lógica para fechar o modal.
  }
}