import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telapesquisa',
  templateUrl: './telapesquisa.component.html',
  styleUrls: ['./telapesquisa.component.scss']
})
export class TelapesquisaComponent {
  constructor(private router: Router) {

  }

  lista = [
    {
      urlImage:
      '/assets/anh-nhat-PdALQmfEqvE-unsplash.jpg',    
      titulo: 'R$ 5000,00',
      subtitulo: 'Samsung s22 Ultra',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'R$ 1000,00',
      subtitulo: 'Iphone 15',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/tim-mossholder-VOXs79vySFo-unsplash (1).jpg',
      titulo: 'R$ 12000,00',
      subtitulo: 'Iphone 16',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'R$ 3000,00',
      subtitulo: 'Samsung Galaxy',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
  ];

  produtos = [
    {
      urlImage:
      'https://images.unsplash.com/photo-1659135890064-d57187f0946c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5vdGVib29rJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
      titulo: 'R$ 3000,00',
      subtitulo: 'Samsung Notebook ',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'R$ 3000,00',
      subtitulo: 'Notebook Dell',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      'https://images.unsplash.com/photo-1659135890064-d57187f0946c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5vdGVib29rJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
      titulo: 'R$ 3000,00',
      subtitulo: 'Asure notebook 15',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'R$ 3000,00',
      subtitulo: 'Vaio FE 15',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
  ];
}

