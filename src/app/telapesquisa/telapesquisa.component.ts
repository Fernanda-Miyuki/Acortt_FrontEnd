import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telapesquisa',
  templateUrl: './telapesquisa.component.html',
  styleUrls: ['./telapesquisa.component.scss']
})
export class TelapesquisaComponent {
  constructor(private router: Router) { }

  lista: any[] = [
    {
      urlImage: '/assets/anh-nhat-PdALQmfEqvE-unsplash.jpg',
      titulo: 'Smartphone Samsung Galaxy',
      subtitulo: 'R$ 5000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'Smartphone Samsung Galaxy',
      subtitulo: 'R$ 1000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    // Add more products as needed
  ];

  produtos: any[] = [
    {
      urlImage: 'https://images.unsplash.com/photo-1659135890064-d57187f0946c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5vdGVib29rJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
      titulo: 'Samsung Notebook',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Samsung Notebook',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    // Add more products as needed
  ];
}
